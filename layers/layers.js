var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Waypoints_1 = new ol.format.GeoJSON();
var features_Waypoints_1 = format_Waypoints_1.readFeatures(json_Waypoints_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waypoints_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waypoints_1.addFeatures(features_Waypoints_1);
var lyr_Waypoints_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waypoints_1, 
                style: style_Waypoints_1,
                popuplayertitle: "Waypoints",
                interactive: true,
                title: 'Waypoints'
            });
var format_fix_2 = new ol.format.GeoJSON();
var features_fix_2 = format_fix_2.readFeatures(json_fix_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fix_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fix_2.addFeatures(features_fix_2);
var lyr_fix_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fix_2, 
                style: style_fix_2,
                popuplayertitle: "fix",
                interactive: true,
                title: '<img src="styles/legend/fix_2.png" /> fix'
            });
var format_cimahiutara_3 = new ol.format.GeoJSON();
var features_cimahiutara_3 = format_cimahiutara_3.readFeatures(json_cimahiutara_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cimahiutara_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cimahiutara_3.addFeatures(features_cimahiutara_3);
var lyr_cimahiutara_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cimahiutara_3, 
                style: style_cimahiutara_3,
                popuplayertitle: "cimahi utara",
                interactive: true,
                title: '<img src="styles/legend/cimahiutara_3.png" /> cimahi utara'
            });
var format_cimahiutara_4 = new ol.format.GeoJSON();
var features_cimahiutara_4 = format_cimahiutara_4.readFeatures(json_cimahiutara_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cimahiutara_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cimahiutara_4.addFeatures(features_cimahiutara_4);
var lyr_cimahiutara_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cimahiutara_4, 
                style: style_cimahiutara_4,
                popuplayertitle: "cimahi utara",
                interactive: true,
                title: '<img src="styles/legend/cimahiutara_4.png" /> cimahi utara'
            });
var format_sebaranjentik_5 = new ol.format.GeoJSON();
var features_sebaranjentik_5 = format_sebaranjentik_5.readFeatures(json_sebaranjentik_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sebaranjentik_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sebaranjentik_5.addFeatures(features_sebaranjentik_5);
var lyr_sebaranjentik_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sebaranjentik_5, 
                style: style_sebaranjentik_5,
                popuplayertitle: "sebaran jentik",
                interactive: true,
                title: '<img src="styles/legend/sebaranjentik_5.png" /> sebaran jentik'
            });
var format_Titikpositifjentik_6 = new ol.format.GeoJSON();
var features_Titikpositifjentik_6 = format_Titikpositifjentik_6.readFeatures(json_Titikpositifjentik_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Titikpositifjentik_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Titikpositifjentik_6.addFeatures(features_Titikpositifjentik_6);
var lyr_Titikpositifjentik_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Titikpositifjentik_6, 
                style: style_Titikpositifjentik_6,
                popuplayertitle: "Titik positif jentik",
                interactive: true,
                title: '<img src="styles/legend/Titikpositifjentik_6.png" /> Titik positif jentik'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_Waypoints_1.setVisible(true);lyr_fix_2.setVisible(true);lyr_cimahiutara_3.setVisible(true);lyr_cimahiutara_4.setVisible(true);lyr_sebaranjentik_5.setVisible(true);lyr_Titikpositifjentik_6.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Waypoints_1,lyr_fix_2,lyr_cimahiutara_3,lyr_cimahiutara_4,lyr_sebaranjentik_5,lyr_Titikpositifjentik_6];
lyr_Waypoints_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_fix_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_cimahiutara_3.set('fieldAliases', {'AREA': 'AREA', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_cimahiutara_4.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_sebaranjentik_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Titikpositifjentik_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Waypoints_1.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_fix_2.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_cimahiutara_3.set('fieldImages', {'AREA': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_cimahiutara_4.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_sebaranjentik_5.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Titikpositifjentik_6.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Waypoints_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_fix_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_cimahiutara_3.set('fieldLabels', {'AREA': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_cimahiutara_4.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_sebaranjentik_5.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Titikpositifjentik_6.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Titikpositifjentik_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});