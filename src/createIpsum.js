import sketch from 'sketch';
import syncIpsum from './syncIpsum';
import { getPreference, getValues, sortedData, getIpsum } from './index';
import { text, document,selectedLayers, selectedCount, canvasView, selectedArtboard, selectedPage, pluginCache } from './index';

var ID = getPreference('spreadsheetID'),
    SHEET = getPreference('sheetName');

function createIpsum() {

  var datas = getValues(ID, SHEET);
  var awesomeIpsum = getIpsum(datas);
  var origin = canvasView.viewCenterInAbsoluteCoordinatesForViewPort(canvasView.viewPort());
  var newText = new text({
    parent: selectedPage,
    text: awesomeIpsum[1],
    name: 'New ipsum',
    style: {
      alignment: 'left',
      borders: []
    },
    frame: {
      width: 400,
      height: 400
    },
    fixedWidth: true
  })

  newText.frame.x = Math.floor((origin.x) - (newText.frame.width / 2));
  newText.frame.y = Math.floor((origin.y) - (newText.frame.height / 2))

};

if (ID != null || SHEET != null) {
  createIpsum()
} else {
  syncIpsum()
}
