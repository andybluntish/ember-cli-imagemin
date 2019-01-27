import { visit } from '@ember/test-helpers'
import $ from 'jquery'
import { module, test } from 'qunit'
import { setupApplicationTest } from 'ember-qunit'

// Original images sizes (from AJAX Content-Length header)
const uncompressedSizes = {
  jpg: 35863,
  png: 11795,
  svg: 4619,
}

module('Acceptance | imagemin', function(hooks) {
  setupApplicationTest(hooks)

  test('Image files are compressed', async function(assert) {
    assert.expect(3)

    await visit('/')

    // Compare the Content-Length of each image against the original
    // file size. Dummy app is setup to enable compression, so the
    // file sizes should be smaller.
    Object.keys(uncompressedSizes).forEach(ext => {
      const url = `/logo.${ext}`
      const uncompressedSize = uncompressedSizes[ext]

      $.get(url).then((data, status, xhr) => {
        let compressedSize

        if (ext === 'svg') {
          compressedSize = xhr.responseText.length
        } else {
          compressedSize = parseInt(xhr.getResponseHeader('Content-Length'), 10)
        }

        assert.ok(compressedSize < uncompressedSize, `${ext} file compressed`)
      })
    })
  })
})
