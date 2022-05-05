import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

// Original images sizes (from request Content-Length header)
const uncompressedSizes = {
  jpg: 35863,
  png: 11795,
  svg: 4619,
};

// Compare the Content-Length of each image against the original
// file size. Dummy app is setup to enable compression, so the
// file sizes should be smaller.
async function fetchImageSize(ext) {
  const url = `/logo.${ext}`;

  const response = await fetch(url);

  if (ext === 'svg') {
    const body = await response.text();

    return body.length;
  } else {
    const contentLength = await response.headers.get('Content-Length');

    return parseInt(contentLength, 10);
  }
}

module('Acceptance | imagemin', function (hooks) {
  setupApplicationTest(hooks);

  test('JPEG files are compressed', async function (assert) {
    assert.expect(1);

    await visit('/');
    const ext = 'jpg';
    const compressedSize = await fetchImageSize(ext);
    const uncompressedSize = uncompressedSizes[ext];

    assert.ok(compressedSize < uncompressedSize, `${ext} file compressed`);
  });

  test('PNG files are compressed', async function (assert) {
    assert.expect(1);

    await visit('/');
    const ext = 'png';
    const compressedSize = await fetchImageSize(ext);
    const uncompressedSize = uncompressedSizes[ext];

    assert.ok(compressedSize < uncompressedSize, `${ext} file compressed`);
  });

  test('SVG files are compressed', async function (assert) {
    assert.expect(1);

    await visit('/');
    const ext = 'svg';
    const compressedSize = await fetchImageSize(ext);
    const uncompressedSize = uncompressedSizes[ext];

    assert.ok(compressedSize < uncompressedSize, `${ext} file compressed`);
  });
});
