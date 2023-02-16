/*window.addEventListener('load',function() {*/
    function show_mapa(barriosDataJSON) {
        var barrioFeature;

        var map = L.map('map').setView([-32.935, -60.68], 13);
        var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        var barriosRosarioGEOJSON = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {"name": "Pichincha"},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [[[-60.666901, -32.941295], [-60.653291, -32.943722], [-60.65003, -32.930758], [-60.651978, -32.930177], [-60.653333, -32.930065], [-60.656059, -32.93074], [-60.659693, -32.930777], [-60.661093, -32.930852], [-60.662418, -32.931127], [-60.664474, -32.931715], [-60.666901, -32.941295]]]
                }
            }, {
                "type": "Feature",
                "properties": {"name": "Arroyito"},
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [[[[-60.673199, -32.911478], [-60.67332, -32.9114], [-60.673233, -32.911506], [-60.673199, -32.911478]]], [[[-60.673233, -32.911506], [-60.673499, -32.91173], [-60.673478, -32.911694], [-60.673907, -32.91191], [-60.67491, -32.91201], [-60.6754, -32.91209], [-60.6754, -32.91281], [-60.68448, -32.91295], [-60.6865, -32.91432], [-60.6809, -32.92089], [-60.666558, -32.920349], [-60.66813, -32.91868], [-60.66955, -32.91662], [-60.67143, -32.91371], [-60.673233, -32.911506]]]]
                },
                "id": "f293eac4-8d30-4306-9c60-8f5c868f79a0"
            }, {
                "type": "Feature",
                "properties": {"name": "Belgrano"},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [[[-60.72255, -32.92998], [-60.72209, -32.93026], [-60.7218, -32.9306], [-60.72163, -32.93114], [-60.72174, -32.93149], [-60.72216, -32.93207], [-60.72146, -32.94722], [-60.72117, -32.94754], [-60.7208, -32.94779], [-60.7202, -32.94837], [-60.71983, -32.94859], [-60.7198, -32.94903], [-60.72004, -32.94916], [-60.72022, -32.9496], [-60.72053, -32.94993], [-60.72103, -32.95015], [-60.721393, -32.950739], [-60.721264, -32.951243], [-60.70289, -32.95066], [-60.70386, -32.92986], [-60.72265, -32.92797], [-60.72255, -32.92998]]]
                },
                "id": "29ccad23-e673-4319-b7bc-5c45c648128e"
            }, {
                "type": "Feature",
                "properties": {"name": "Barrio España y Hospitales"},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [[[-60.658624, -32.964927], [-60.66154, -32.97624], [-60.64446, -32.97934], [-60.64437, -32.97675], [-60.642015, -32.967866], [-60.658624, -32.964927]]]
                }
            }, {
                "type": "Feature",
                "properties": {"name": "Fisherton"},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [[[-60.723195, -32.931219], [-60.723925, -32.913567], [-60.782633, -32.915152], [-60.776582, -32.922501], [-60.742679, -32.926104], [-60.74285, -32.927112], [-60.723195, -32.931219]]]
                },
                "id": "80a11849-5714-488a-8453-1a401eb3fe83"
            }, {
                "type": "Feature",
                "properties": {"name": "Nuestra Señora De Lourdes"},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [[[-60.66956, -32.952088], [-60.656043, -32.954592], [-60.653291, -32.943722], [-60.666901, -32.941295], [-60.66956, -32.952088]]]
                },
                "id": "e982ac3a-4b06-430f-8782-d294c081383d"
            }, {
                "type": "Feature",
                "properties": {"name": "Luis Agote"},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [[[-60.664474, -32.931715], [-60.66754, -32.93268], [-60.670495, -32.9332], [-60.677651, -32.933236], [-60.679175, -32.939093], [-60.666901, -32.941295], [-60.664474, -32.931715]]]
                },
                "id": "d7e62db3-bf95-415d-839e-903a7c930bbd"
            }, {
                "type": "Feature",
                "properties": {"name": "Martin"},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [[[-60.632735, -32.947543], [-60.635424, -32.958277], [-60.62102, -32.960894], [-60.622076, -32.956096], [-60.623621, -32.953233], [-60.626678, -32.948209], [-60.62908, -32.94823], [-60.632735, -32.947543]]]
                },
                "id": "9848ea31-9420-4f3b-bbdc-bee5280f1186"
            }, {
                "type": "Feature",
                "properties": {"name": "Parque"},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [[[-60.67061, -32.95609], [-60.67222, -32.96247], [-60.666804, -32.963415], [-60.66475, -32.95541], [-60.67061, -32.95609]]]
                }
            }, {
                "type": "Feature",
                "properties": {"name": "Puerto Norte"},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [[[-60.64981, -32.93019], [-60.65039, -32.92975], [-60.65294, -32.92862], [-60.65475, -32.92795], [-60.65669, -32.92741], [-60.66174, -32.92396], [-60.6631, -32.92277], [-60.665935, -32.920943], [-60.666558, -32.920349], [-60.672286, -32.920621], [-60.672255, -32.921988], [-60.66854, -32.92187], [-60.66784, -32.92199], [-60.66521, -32.92333], [-60.66543, -32.92483], [-60.66564, -32.92585], [-60.66158, -32.92583], [-60.66221, -32.92843], [-60.66187, -32.92879], [-60.66137, -32.92985], [-60.65852, -32.92903], [-60.65664, -32.92871], [-60.65615, -32.92869], [-60.65419, -32.92889], [-60.64997, -32.93075], [-60.64981, -32.93019]]]
                },
                "id": "8faeeb0a-1332-469e-8907-4060bb8361b2"
            }, {
                "type": "Feature",
                "properties": {"name": "Refinerias"},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [[[-60.66854, -32.92187], [-60.672255, -32.921988], [-60.672286, -32.920621], [-60.6809, -32.92089], [-60.67611, -32.92689], [-60.67412, -32.92994], [-60.6733, -32.93062], [-60.67293, -32.93106], [-60.67219, -32.9309], [-60.67139, -32.93081], [-60.6687, -32.93101], [-60.66521, -32.93091], [-60.664229, -32.930795], [-60.663285, -32.930507], [-60.661376, -32.92985], [-60.66152, -32.92949], [-60.66179, -32.92892], [-60.66222, -32.92843], [-60.66158, -32.92583], [-60.66564, -32.92585], [-60.66543, -32.92483], [-60.66521, -32.92333], [-60.66784, -32.92199], [-60.66854, -32.92187]]]
                },
                "id": "e66e2b49-565d-49ab-90dd-7f2b6e4fac29"
            }, {
                "type": "Feature",
                "properties": {"name": "Bella Vista"},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [[[-60.6874, -32.97173], [-60.673757, -32.974], [-60.672941, -32.970904], [-60.673413, -32.970796], [-60.673585, -32.969572], [-60.672426, -32.964819], [-60.672898, -32.964819], [-60.67222, -32.96247], [-60.68442, -32.9603], [-60.6874, -32.97173]]]
                },
                "id": "f0e13d0a-4681-4e34-8448-b06832257562"
            }, {
                "type": "Feature",
                "properties": {"name": "Abasto"},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [[[-60.654981, -32.955983], [-60.653636, -32.956213], [-60.65594, -32.965402], [-60.642015, -32.967866], [-60.639434, -32.957548], [-60.654688, -32.954833], [-60.654981, -32.955983]]]
                },
                "id": "b1873c62-61b3-45f9-9fed-952e946a86f5"
            }, {
                "type": "Feature",
                "properties": {"name": "Republica De La Sexta"},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [[[-60.642015, -32.967866], [-60.622608, -32.971372], [-60.62205, -32.970508], [-60.621192, -32.969067], [-60.620892, -32.967843], [-60.620977, -32.966763], [-60.621407, -32.965395], [-60.62175, -32.963811], [-60.621664, -32.962514], [-60.62102, -32.960894], [-60.639434, -32.957548], [-60.642015, -32.967866]]]
                },
                "id": "a81f72d3-ebb5-4612-8010-15f7a16d3244"
            }, {
                "type": "Feature",
                "properties": {"name": "Azcuénaga"},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [[[-60.70289, -32.95066], [-60.692478, -32.950487], [-60.692929, -32.936617], [-60.703635, -32.934692], [-60.70289, -32.95066]]]
                },
                "id": "be574338-3244-4103-b704-2829e1a56fde"
            }, {
                "type": "Feature",
                "properties": {"name": "Echesortu"},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [[[-60.6702, -32.9544], [-60.666901, -32.941295], [-60.679175, -32.939093], [-60.682404, -32.952144], [-60.6702, -32.9544]]]
                },
                "id": "57a516f0-0e3d-45fb-887b-028679890807"
            }, {
                "type": "Feature",
                "properties": {"name": "Remedios de Escalada de San Martín"},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [[[-60.692478, -32.950487], [-60.682404, -32.952144], [-60.679175, -32.939093], [-60.692929, -32.936617], [-60.692478, -32.950487]]]
                },
                "id": "42bc1b8b-51ed-4342-acdb-66f89787f1e1"
            }, {
                "type": "Feature",
                "properties": {"name": "Centro"},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [[[-60.656043, -32.954592], [-60.635424, -32.958277], [-60.632735, -32.947543], [-60.62908, -32.94823], [-60.626678, -32.948209], [-60.629008, -32.945302], [-60.632794, -32.941486], [-60.636772, -32.937806], [-60.640342, -32.93543], [-60.646808, -32.931489], [-60.64981, -32.93019], [-60.65003, -32.930758], [-60.656043, -32.954592]]]
                },
                "id": "0fe76635-ffca-49af-83d4-05087a7a7915"
            }, {
                "type": "Feature",
                "properties": {"name": "Alberdi"},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [[[-60.698284, -32.874466], [-60.698701, -32.874478], [-60.698369, -32.87556], [-60.701394, -32.876208], [-60.701501, -32.875839], [-60.704752, -32.87656], [-60.699098, -32.892795], [-60.703132, -32.893696], [-60.707338, -32.893894], [-60.708067, -32.893678], [-60.718131, -32.89402], [-60.719461, -32.893696], [-60.720341, -32.894849], [-60.707982, -32.905028], [-60.684593, -32.900002], [-60.680323, -32.898975], [-60.68226, -32.894596], [-60.683118, -32.892326], [-60.683547, -32.891749], [-60.684448, -32.891551], [-60.685055, -32.889857], [-60.68587, -32.887514], [-60.686385, -32.885568], [-60.686557, -32.884199], [-60.686256, -32.882649], [-60.687801, -32.882865], [-60.695778, -32.88319], [-60.698284, -32.874466]]]
                },
                "id": "539edef7-537c-46c9-9416-f6b8f9b009af"
            }]
        }

        var info = L.control();

        info.onAdd = function (map) {
            this._div = L.DomUtil.create('div', 'info');
            this.update();
            return this._div;
        };

        info.update = function (props) {
            this._div.innerHTML = (props ? '<h4>' + props.name + '</h4><br />' : '<h4>Pasa el mouse por arriba</h4>');
        };

        info.addTo(map);

        function style(feature) {
            return {
                fillColor: '#ADA2FF',
                weight: 2,
                opacity: 1,
                color: 'white',
                dashArray: '3',
                fillOpacity: 0.7
            };
        }

        function highlightFeature(e) {
            var layer = e.target;

            layer.setStyle({
                weight: 5,
                color: '#FFF8E1',
                dashArray: '',
                fillOpacity: 0.7
            });
            layer.bringToFront();
            info.update(layer.feature.properties);
        }

        function resetHighlight(e) {
            barrioFeature.resetStyle(e.target);
        }

        function onEachFeature(feature, layer) {
            layer.on({
                mouseover: highlightFeature,
                mouseout: resetHighlight
            });
        }

        barrioFeature = L.geoJson(barriosRosarioGEOJSON, {
            style: style,
            onEachFeature: onEachFeature
        }).addTo(map);

        barrioFeature.on('click', function (e) {
            var barrio = barriosDataJSON.find(item => item.barrio__nombre === e.layer.feature.properties.name)
            var promedio = barrio.average
            var minimo = barrio.minimo
            var maximo = barrio.maximo
            e.layer.bindPopup("Precio promedio de alquiler: $" + promedio + "<br>Precio mas bajo: $" + minimo + "<br>Precio mas alto: $" + maximo).openPopup();
        });
    }
/*
});*/
