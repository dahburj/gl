export default "precision mediump float;\n\nuniform mat4 MODEL;\nuniform mat4 PROJECTION;\nuniform mat4 VIEW;\nuniform mat4 MODEL_INVERSE_TRANSPOSE;\n\nuniform vec3 CAMERA_WORLD_POSITION;\n\nattribute vec3 POSITION;\nattribute vec3 NORMAL;\nattribute vec2 UV;\n\nstruct PointLight {\n\tvec3 location;\n\tvec3 color;\n\tfloat intensity;\n\t// TODO fall-off etc\n};\n\nuniform PointLight POINT_LIGHTS[8];";