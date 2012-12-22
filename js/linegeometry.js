THREE.LineGeometry = function ( width, widthSegments ) {

	THREE.Geometry.call( this );

	this.width = width;

	this.widthSegments = widthSegments || 1;

	var ix, iz;
	var width_half = width / 2;

	var gridX = this.widthSegments;

	var gridX1 = gridX + 1;

	var segment_width = this.width / gridX;

		for ( ix = 0; ix < gridX1; ix ++ ) {

			var x = ix * segment_width - width_half;

			this.vertices.push(new THREE.Vector3(x, 0, 0));

		}


};

THREE.LineGeometry.prototype = Object.create( THREE.Geometry.prototype );
