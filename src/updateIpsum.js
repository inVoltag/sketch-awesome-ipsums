import sketch from 'sketch';
import {getPreference, getValues, sortedData, getIpsum} from './index';
import {text, document,selectedLayers, selectedCount, canvasView, selectedArtboard, selectedPage, pluginCache} from './index';

var ID = getPreference('spreadsheetID');

function updateIpsum() {

  var datas = getValues(ID, 1);
  if (selectedCount === 0) {
    sketch.UI.message('No layers are selected')
  } else {
    selectedLayers.forEach(function (layer, i) {
      if (layer.type == 'Text') {
        var awesomeIpsum = getIpsum(datas);
        layer.text = awesomeIpsum[1];
        layer.name = awesomeIpsum[0]
      } else {
        return sketch.UI.message('Some layers are not text layers')
      }
    })
  }

};

if(ID !== 'empty') {
  updateIpsum()
} else {
  sketch.UI.alert('Synchronize first your ipsums', 'Link your Google spreadsheet via the Sync. menu')
}
