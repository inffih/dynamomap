/*! http://yashkin.by/cyclorama/ by @alexantr */
;(function ($) {
	$.fn.cyclorama = function (o) {

		o = $.extend({
			useKeyboard: false // enable keyboard support
		}, o || {});

		return this.each(function () {

			var $pan = $(this);
			var $panInner = $pan.find('.pan-inner');
			var $panLeft = $pan.find('.pan-left');
			var $panRight = $pan.find('.pan-right');
			var screenWidth = window.screen.width;
			var contentWidth = $panInner.find('.pan-content').width();

			$panInner.css({width: contentWidth}); // set full width
			var initPos = -4000; // init position (-50% left)

			var startPos = initPos; // position while dragging start
			var curPos = initPos; // current position while dragging
			var prevPos = 0; // previous position for calc inertia
			var dirPrevPos; // previous position for calc direction

			var direction = 0; // 1 - left, 2 - right, 0 - nothing
			var offsetX = 0; // drag offset
			var isDragging = false; // is dragging now
			var percentage = 0; // offset percentage

			var timer;
			var dist = 0; // distance for inertia
			var posx;

			// left, right
			$panLeft.on('mousedown', goRight);
			$panRight.on('mousedown', goLeft);

			if (o.useKeyboard) {
				$(document).on("keydown", function (e) {
					if (e.which == 37) {
						goRight(e);
					} else if (e.which == 39) {
						goLeft(e);
					}
				});
			}

			function goLeft(e) {
				if(startPos > -4000){
				e.preventDefault();
				direction = 2;
				smooth(250);
				}
			}

			function goRight(e) {
				if(startPos < -4){
				e.preventDefault();
				direction = 1;
				smooth(250);
				}
			}

			function move(pos) {
				curPos = startPos + pos;
				if (curPos >= 0)
					startPos = startPos + initPos;
				if (curPos <= initPos)
					startPos = startPos - initPos;
				$panInner.css({left: curPos});
			}

			function smooth(dist) {

				// hide unnecessary pan buttons
				if(startPos <= -4000){
					$($panRight).addClass('is-hidden');
				} else if (startPos > -4000 && $($panRight).hasClass('is-hidden')) {
					$($panRight).removeClass('is-hidden');
				}
				if(startPos >= -4){
					$($panLeft).addClass('is-hidden');
				} else if (startPos < -4 && $($panLeft).hasClass('is-hidden')) {
					$($panLeft).removeClass('is-hidden');
				}

				if (dist > 1) {
					if (direction == 1)
						startPos = startPos + (dist / 10);
					else if (direction == 2)
						startPos = startPos - (dist / 10);
					if (direction > 0) {
						// check for max sideways movement
						if (startPos >= -4) {
							startPos = -4;
							return;
						}
						if (startPos <= -4000) {
							startPos = -4000
							return;
						}
						// smooth movement
						move(0);
						dist = dist * 0.97;
						setTimeout(function () {
							smooth(dist);
						}, 10);
					}

				}
			}

			function setDist() {
				dist = Math.abs(posx - prevPos);
				prevPos = posx;
			}


		});
	};

})(jQuery);
