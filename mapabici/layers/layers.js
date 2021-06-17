var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Recorregutdelaruta_1 = new ol.format.GeoJSON();
var features_Recorregutdelaruta_1 = format_Recorregutdelaruta_1.readFeatures(json_Recorregutdelaruta_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Recorregutdelaruta_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Recorregutdelaruta_1.addFeatures(features_Recorregutdelaruta_1);
var lyr_Recorregutdelaruta_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Recorregutdelaruta_1, 
                style: style_Recorregutdelaruta_1,
                interactive: true,
                title: '<img src="styles/legend/Recorregutdelaruta_1.png" /> Recorregut de la ruta'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Recorregutdelaruta_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Recorregutdelaruta_1];
lyr_Recorregutdelaruta_1.set('fieldAliases', {'name': 'name', });
lyr_Recorregutdelaruta_1.set('fieldImages', {'name': 'TextEdit', });
lyr_Recorregutdelaruta_1.set('fieldLabels', {'name': 'no label', });
lyr_Recorregutdelaruta_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});