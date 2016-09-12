var scrollableWidth = 0,
	scrollPosition = 0,
	windowWidth = 1280,
	windowHeight = 800,
	mainScroll, mainScrollApi, projectOuterScroll, projectOuterScrollApi, infoOuterScroll, infoOuterScrollApi,
	activeBlock = 0,
	blocksOffset = [],
	projectOpened = false,
	infoOpened = false,
	infoActive = null,
	mainMenuHeight = 400;
	hash = window.location.hash;
	currentMovieUrl = '';

$(document).ready(function () {
	windowWidth = $(window).width();
	windowHeight = $(window).height();
	
	if(!$.browser.safari) {
		$('body').queryLoader2({
			barColor: '#cfcfcf',
			backgroundColor: '#666',
			percentage: true,
			barHeight: 30,
			completeAnimation: 'grow'
		});
	};
		
	mainMenuHeight = Math.floor(($(window).height() - 200) / 50) * 50;

    $('#main_menu').hover(function () {
        $(this).children('.hoverscroll').stop(false, true).fadeIn();
    }, function () {
        $(this).children('.hoverscroll').stop(false, true).fadeOut();
    });

    createMainScroll();

    $('body').bind('mousewheel', function (event, delta, deltaX, deltaY) {
		if (!($('#jquery-overlay, .jqmOverlay').is(':visible'))) {
			if (projectOpened) {
				if (typeof (projectOuterScrollApi) == 'object') {
					if ($.browser.mozilla) {
						projectOuterScrollApi.scrollByY(-delta * 20, false);
					} else {
						projectOuterScrollApi.scrollByY(-delta * 50, '1000');
					};
				};
			} else if (infoOpened) {
				if (typeof (infoOuterScrollApi) == 'object') {
					if ($.browser.mozilla) {
						infoOuterScrollApi.scrollByY(-delta * 50, false);
					} else {
						infoOuterScrollApi.scrollByY(-delta * 100, '1000');
					};
				};
			} else {
				if (typeof (mainScrollApi) == 'object') {
					if ($.browser.mozilla) {
						mainScrollApi.scrollByX(-delta * 50, false);
					} else {
						mainScrollApi.scrollByX(-delta * 300, '1000');
					};
				}
			};
		};
		return false;
    });

    MainWindowResize();
    $(window).resize(function () {
        MainWindowResize();
    });

    $(window).scroll(function () {
        if (typeof (mainScrollApi) == 'object') {
            scrollPosition = mainScrollApi.getContentPositionX();
        };
        scrollUpdate();
    });

    $('#main_menu a.logo').click(function () {
        if (infoOpened) {
            hideInfo(infoActive, 1000, function () {
                mainScrollApi.scrollToElement($('#games div.block_container:first'), true, true);
            });
        } else {
            if (projectOpened) {
                hideProject(activeBlock, 1000, function () {
                    mainScrollApi.scrollToElement($('#games div.block_container:first'), true, true);
                });
            } else {
                mainScrollApi.scrollToElement($('#games div.block_container:first'), true, true);
            };
        };
        return false;
    });

    $('#main_menu li a').click(function () {
        var self = this;
        index = $(this).parent('li').index();
        if (infoOpened) {
            hideInfo(infoActive, 1000, function () {
                showProject($(self).parents('li').index(), 1000);
            });
        } else {
            if (projectOpened) {
                hideProject(activeBlock, 1000, function () {
                    showProject($(self).parents('li').index(), 1000);
                });
            } else {
                showProject($(self).parents('li').index(), 1000);
            };
        };

        return false;
    });
	
	$('#games div.double div.double_right a.arrow').click(function() {
		var self = this;
		
		hideProject(activeBlock, 1000, function () {
			showProject($(self).attr('game'), 1000);
		});
	});

    $('#games div.block_container > div').click(function (e) {
        if (!projectOpened) {
            showProject($(this).parents('div.block_container').index(), 1000);
        };
        return false;
    });

    $('#games div.block_container span.close').click(function () {
        if (projectOpened) {
            hideProject($(this).parents('div.block_container').index(), 1000);
        };
        return false;
    });

    galPages();

    $('#footer ul.menu a').click(function () {
        infoNew = $(this).data('link');
        if (infoOpened) {
            if (infoNew == infoActive) {
                hideInfo(infoActive, 1000);
            } else {
                switchInfo(infoNew, 1000);
            };
        } else {
            if (projectOpened) {
                hideProject(activeBlock, 1000, function () {
                    showInfo(infoNew, 1000)
                });
            } else {
                showInfo(infoNew, 1000);
            };
        };
        return false;
    });

    $('#games div.info_block span.close').live('click', function () {
        hideInfo(infoActive, 1000);
    });

    $('#video').jqm();
	$('#games div.double div.double_right a.video').click(function(){
		currentMovieUrl = $(this).attr('href');
		$('#video .title').html( $(this).attr('title') );
	});
	
	$('#games div.info_block_container').css({'top':$(window).height()});
	
	// Creating hoverscroll with fixed arrows
	$('#main_menu ul').css({'visibility':'visible'}).hoverscroll({
		vertical: true,
		width:234,
		height:mainMenuHeight
	});
	
	$('.hoverscroll').hide();
	
	$('#games div.block_container').each(function() {
		var n = $(this).index();
		$(this).find('ul.gallery a').attr({'rel' : 'shadowbox[' + n + ']'});
	});
    Shadowbox.init({
		handleOversize: "resize",
		modal: true,
		overlayColor: '#FFF',
		overlayOpacity: 0.8,
		counterType:"skip"
	});

	if (hash) {
		var parts = /^\#([\S]+)\-([\d]+)|\#([\S]+)$/.exec(hash);
		// console.log(hash);
		// console.log(parts);
		
		if (!parts[2]) {
			if ($('#footer ul.menu a[data-link="' + parts[3] +'"]').exists()) {
				console.log(parts[3]);
				showInfo(parts[3], 1000);
			};
		} else {
			if (parts[1] = 'game') {
				showProject(parts[2], 1000)
			}
		};
	};
});

function MainWindowResize() {
    if (infoOpened || projectOpened) {
        window.location = window.location;
    } else {
        scrollableWidth = 0;
        $('#scrollable').height(windowHeight - 50);
        $('.block_container, div.info_block_container').width(windowWidth);
        $('div.info_block_container').height($('#games').height());
        $('.block_container').each(function () {
            scrollableWidth += $(this).width();
        });
        $('#scrollable').width(scrollableWidth);
        if (typeof (mainScrollApi) == 'object') {
            mainScrollApi.reinitialise();
        };
        scrollUpdate();
		if (windowWidth < 1250) {
			$('#lang').css({'right' : '20px'});
		} else {
			$('#lang').css({'right' : '163px'});
		};
    };
};

function scrollUpdate() {
    if (projectOpened) {
        if (typeof (projectOuterScrollApi) == 'object') {
            $('#games div.block:eq(' + activeBlock + ') div.text, #games div.block:eq(' + activeBlock + ') .date').css({
                'margin-top': -(projectOuterScrollApi.getPercentScrolledY() * $('#games div.block:eq(' + activeBlock + ') div.text').height()) * 0.75 + 20
            });
        }
    } else if (infoOpened) {
        if (typeof (infoOuterScrollApi) == 'object') {
            $('#games div.info_block_content:visible').css({
                'margin-top': -(infoOuterScrollApi.getPercentScrolledY() * $('#games div.info_block_content').outerHeight()) * 0.75 + 20
            });
        }
    } else {
        if (typeof (mainScrollApi) == 'object') {
            $('body').css({
                'background-position': 0.95 * scrollPosition
            });
            $('#back_figs').css({
                'background-position': 0.9 * scrollPosition
            });
            $('#tube').css({
                'background-position': 0.6 * scrollPosition
            });
            $('#upper_figs').css({
                'background-position': 0.3 * scrollPosition
            });
            $('#games .mask').each(function (n, el) {
                $(this).find('.pic').css({
                    'background-position': -0.5 * (scrollPosition - n * windowWidth)
                });
                $(this).css({
                    'margin-left': -scrollPosition - 317 + n * windowWidth
                });
            });
            blocksOffset = [];
            $('#games div.block_container').each(function (index, element) {
                blocksOffset.push($(this).offset().left);
            });

            blockIndex = blocksOffset.length, minBlockOffset = Math.abs(blocksOffset[0]), activeBlock = 0;
            while (blockIndex--) {
                if (Math.abs(blocksOffset[blockIndex]) < minBlockOffset) {
                    minBlockOffset = Math.abs(blocksOffset[blockIndex]);
                    activeBlock = blockIndex;
                }
            }
            $('#main_menu li').removeClass('current');
            $('#main_menu li:eq(' + activeBlock + ')').addClass('current');
			window.location.hash = 'game-' + $('#games div.block_container:eq(' + (activeBlock) + ')').attr('game-id');
        }
    };
}

function showProject(n, speed, callback) {
    if (typeof (mainScrollApi) == 'object') {
        mainScrollApi.scrollToElement($('#games div.block_container:eq(' + n + ')'), true, true);
    };
	setTimeout(function(){_show(n, speed, callback)}, 400);
	
	function _show(n, speed, callback) {
		$('.jspHorizontalBar').hide();
		destroyMainScroll();
		projectOpened = true;
		$('#scrollable').height(windowHeight - 30);
		$('#games').css({
			'height': '100%'
		});
		$('#games .mask, #games div.block').css({
			'cursor': 'default'
		});
		$('#games div.block:eq(' + n + ') div.text .name, #games div.block:eq(' + n + ') div.text .expand, , #games div.block:eq(' + n + ') div.text .info').stop(false, true).fadeOut(speed/4);
		$('#games div.block:eq(' + n + ') div.text').stop(false, true).animate({
			'width': '595px',
			'height': $('#games div.block:eq(' + n + ') .project').height(),
			'top': '-110px',
			'left': '176px',
			'padding-top': '45px',
			'padding-right': '25px',
			'padding-bottom': '45px',
			'padding-left': '100px'
		}, speed);
		$('#games div.block:eq(' + n + ') div.date').stop(false, true).animate({
			'top': '-140px',
			'left': '266px'
		}, speed);
		$('#games div.block:eq(' + n + ') div.pic').stop(false, true).animate({
			'left': '-25px'
		}, speed);
		$('#games div.block_container:eq(' + n + ') .mask').stop(false, true).animate({
			'margin-left': '-700px'
		}, speed);
	
		$('#tube').stop(false, true).animate({
			'margin-top': '50px'
		}, speed, function () {
			if (callback && typeof (callback) === "function") {
				$('#games div.block:eq(' + n + ') div.project').stop(false, true).fadeIn(speed/4, callback);
			} else {
				$('#games div.block:eq(' + n + ') div.project').stop(false, true).fadeIn(speed/4);
			};
			$('#games div.block_container:eq(' + n + ') span.close').fadeIn(speed/4);
			$('#games div.block:eq(' + n + ') div.scroll_content').height(($('#games div.block:eq(' + n + ') .project').height() + 500) / $(window).height() * $('#games div.block:eq(' + n + ') div.scroll').height());
			projectOuterScroll = $('#games div.block:eq(' + n + ') div.scroll').jScrollPane({
				showArrows: true
			});
			projectOuterScrollApi = projectOuterScroll.data('jsp');
			$('#games div.block:eq(' + n + ') div.scroll').hide().css({
				'visibility': 'visible'
			}).fadeIn(speed, function() {/*
				$('#games div.block_container:eq(' + n + ') ul.gallery a').attr({'class':'lightbox'}).attr({'rel':'group_'+n});
				$('.lightbox').lightbox({
					fitToScreen: true,
					scaleImages: true
				});*/
				
				//shadowbox
				//$('#games div.block_container:eq(' + n + ') ul.gallery a').attr({'rel':'shadowbox[' + n + ']'});
			});
			//$('#games div.block_container:eq(' + n + ') ul.gallery a').lightBox();
		});
		
		$('#gal-close').live('click', function() {
			hideGal();
			return false;
		});
	};
}

function hideProject(n, speed, callback) {
    $('#games span.close').hide();
    projectOuterScrollApi.destroy();
    projectOuterScroll = 0;
    projectOuterScrollApi = 0;
    $('#games div.block:eq(' + n + ') div.scroll').css({
        'visibility': 'hidden'
    }).show();
    $('#games div.block:eq(' + n + ') div.project').stop(false, true).fadeOut(speed/4, function () {
        
        $('#games div.block:eq(' + n + ') div.text').stop(false, true).animate({
            'width': '210px',
            'height': '165px',
            'top': '55px',
            'left': '420px',
            'padding-top': '35px',
            'padding-right': '40px',
            'padding-bottom': '0',
            'padding-left': '150px',
            'margin-top': '0px'
        }, speed, function() {
			$('#games div.block:eq(' + n + ') div.text .name, #games div.block:eq(' + n + ') div.text .expand, , #games div.block:eq(' + n + ') div.text .info').stop(false, true).fadeIn(speed/4);	
		});
        $('#games div.block:eq(' + n + ') div.date').stop(false, true).animate({
            'top': '25px',
            'left': '560px',
            'margin-top': '0px'
        }, speed);
        $('#games div.block:eq(' + n + ') div.pic').stop(false, true).animate({
            'left': '185px'
        }, speed);
        $('#games div.block_container:eq(' + n + ') .mask').stop(false, true).animate({
            'margin-left': '-317px'
        }, speed);
        $('#tube').animate({
            'margin-top': '-223px'
        }, speed, function () {
            $('#games .mask, #games div.block').css({
                'cursor': 'pointer'
            });
            $('#games').css({
                'height': '99%'
            });
            $('#scrollable').height(windowHeight - 50);
            createMainScroll();
            $('.jspHorizontalBar').show();
            projectOpened = false;
            if (callback && typeof (callback) === "function") {
                callback();
            };
        });
    });
};

function galPages() {
    $('#gal-pages span').live('click', function () {
//		$('#gal-close').click();
		var num = $(this).index() - $('#gal-pages span.current').index();
		if (num > 0) {
			for (var i = 0; i < num; i++) {
				$('#lightbox-nav-btnNext').click();
			}
		} else if (num < 0) {
			for (var i = 0; i < -num; i++) {
				$('#lightbox-nav-btnPrev').click();
			}
			
		}
//		$('#games div.block_container:eq(' + activeBlock + ') ul.gallery li:eq(' + $(this).index() + ') a').css({'border':'2px solid #FF0'}).click();
        return false;
    });
};

function showInfo(name, speed, callback) {
	window.location.hash = '#' + name;
    if (infoActive != name) {
        $('.' + name).parent('li').addClass('current');
        $('.jspHorizontalBar').hide();
        destroyMainScroll();
        $('#scrollable').height(windowHeight - 30);
        infoOpened = true;
        infoActive = name;
        $('#games div.info_block_content').hide();
        $('#' + name).show();
        $('#games div.info_block_container').css({
            'visibility': 'hidden'
        }).show();
        $('#games div.info_block div.scroll_content').height($('#' + name).outerHeight() / $(window).height() * $('#games div.info_block div.scroll').height());
        infoOuterScroll = $('#games div.info_block div.scroll').jScrollPane({
            showArrows: true
        });
        infoOuterScrollApi = infoOuterScroll.data('jsp');
        $('#games div.info_block_container').hide().css({
            'visibility': 'visible'
        });
        $('#games div.info_block div.scroll').hide().css({
            'visibility': 'visible'
        }).fadeIn(speed);
        $('#games div.info_block_container span.close').fadeIn(speed);
        $('#tube').stop(false, true).animate({
            'margin-top': '50px'
        }, speed);
        $('#games div.block_container').stop(false, true).animate({
            'top': '-800px'
        }, speed/2);
        $('#games div.info_block_container span.close').show();

        $('#info_back').animate({
            'margin-top': '-400px'
        }, speed * 1);
        $('#info_center').animate({
            'margin-top': '-400px'
        }, speed * 0.8);
        $('#info_upper').animate({
            'margin-bottom': '-400px'
        }, speed * 0.6);

        if (callback && typeof (callback) === "function") {
            $('#games div.info_block_container').stop(false, true).show().animate({'top':'0'}, speed, callback);
        } else {
            $('#games div.info_block_container').stop(false, true).show().animate({'top':'0'}, speed);
        }
    };
};

function hideInfo(name, speed, callback) {
    $('.' + name).parent('li').removeClass('current');
    $('#games div.info_block_container span.close').hide();
    infoOuterScrollApi.destroy();
    infoOuterScroll = 0;
    infoOuterScrollApi = 0;
    $('#games div.info_block div.scroll').css({
        'visibility': 'hidden'
    }).show();
    infoActive = null;

    $('#info_back').animate({
        'margin-top': '500px'
    }, speed * 1);
    $('#info_center').animate({
        'margin-top': '500px'
    }, speed * 0.8);
    $('#info_upper').animate({
        'margin-bottom': '500px'
    }, speed * 0.6);

    $('#tube').stop(false, true).animate({
        'margin-top': '-223px'
    }, speed, function () {
        $('#scrollable').height(windowHeight - 50);
        createMainScroll();
        $('.jspHorizontalBar').show();
        infoOpened = false;
        $('#games div.info_block_content').css({
            'margin-top': ''
        });
    });
	$('#games div.info_block_container').stop(false, true).animate({'top':$(window).height()}, speed/2, function() {
		$(this).hide();
	});
    if (callback && typeof (callback) === "function") {
		$('#games div.block_container').stop(false, true).animate({
			'top': '0'
		}, speed, function() {
			callback();
			window.location.hash = '#' + name;
		});
    } else {
		$('#games div.block_container').stop(false, true).animate({
			'top': '0'
		}, speed, function() {
			window.location.hash = '#game-' + activeBlock;
		});
    }
};

function switchInfo(name, speed, callback) {
    $('#footer ul.menu li').removeClass('current');
    $('.' + name).parent('li').addClass('current');
    $('#games div.info_block_container span.close').hide();
    infoOuterScrollApi.destroy();
    infoOuterScroll = 0;
    infoOuterScrollApi = 0;
    $('#games div.info_block div.scroll').css({
        'visibility': 'hidden'
    }).show();
    infoActive = null;

    $('#info_back').stop(false, true).animate({
        'margin-top': '500px'
    }, speed * 1);
    $('#info_center').stop(false, true).animate({
        'margin-top': '500px'
    }, speed * 0.8);
    $('#info_upper').stop(false, true).animate({
        'margin-bottom': '500px'
    }, speed * 0.6);
	
	$('#games div.info_block_content').css({
		'margin-top': ''
	});
		
	$('#games div.info_block_container').stop(false, true).animate({'top':$(window).height()}, speed/2, function() {
		$(this).hide();
		infoActive = name;
		$('#games div.info_block_content').hide();
		$('#' + name).show();
		$('#games div.info_block_container').css({
			'visibility': 'hidden'
		}).show();
		$('#games div.info_block div.scroll_content').height($('#' + name).outerHeight() / $(window).height() * $('#games div.info_block div.scroll').height());
		infoOuterScroll = $('#games div.info_block div.scroll').jScrollPane({
			showArrows: true
		});
		infoOuterScrollApi = infoOuterScroll.data('jsp');
		$('#games div.info_block_container').hide().css({
			'visibility': 'visible'
		});
		$('#games div.info_block div.scroll').hide().css({
			'visibility': 'visible'
		}).fadeIn(speed);
		$('#games div.info_block_container span.close').fadeIn(speed);
	
		$('#info_back').stop(false, true).animate({
			'margin-top': '-400px'
		}, speed * 1);
		$('#info_center').stop(false, true).animate({
			'margin-top': '-400px'
		}, speed * 0.8);
		$('#info_upper').stop(false, true).animate({
			'margin-bottom': '-400px'
		}, speed * 0.6);
	
		if (callback && typeof (callback) === "function") {
			$('#games div.info_block_container').stop(false, true).show().animate({'top':'0'}, speed, callback);
		} else {
			$('#games div.info_block_container').stop(false, true).show().animate({'top':'0'}, speed);
		}

	});
	
	
};

function destroyMainScroll() {
    if (typeof (mainScrollApi) == 'object') {
        mainScrollApi.destroy();
        mainScroll = 0;
        mainScrollApi = 0;
    };
    $('#content').css({
        'overflow-x': 'hidden',
        'overflow': 'hidden'
    });
};

function createMainScroll() {
    $('#content').css({
        'overflow-x': '',
        'overflow': ''
    });
    mainScroll = $('#content').jScrollPane({
        showArrows: true
    });
    mainScrollApi = mainScroll.data('jsp');
};

$(document).keyup(function (e) {
    switch (e.keyCode) {
    case 27:
        // ESC
        if ($('#jquery-overlay, .jqmOverlay').is(':visible')) {
			hideGal();
        } else if ($('#video').is(':visible')) {
            $('#video').jqmHide();
        } else {
            $('.close:visible').click()
        };
        break;
    case 37:
        // LEFt
        if ($('#jquery-overlay, .jqmOverlay').is(':visible')) {
            $('#lightbox-nav-btnPrev').click();
        } else if (typeof (mainScrollApi) == 'object') {
            if ($('#games div.block_container:eq(' + (activeBlock - 1) + ')').exists()) {
                mainScrollApi.scrollToElement($('#games div.block_container:eq(' + (activeBlock - 1) + ')'), true, true);
            } else {
                mainScrollApi.scrollToElement($('#games div.block_container:eq(' + activeBlock + ')'), true, true);
            };
        };
        break;
    case 39:
        // RIGHT
        if ($('#jquery-overlay, .jqmOverlay').is(':visible')) {
            $('#lightbox-nav-btnNext').click();
        } else if (typeof (mainScrollApi) == 'object') {
            if ($('#games div.block_container:eq(' + (activeBlock + 1) + ')').exists()) {
                mainScrollApi.scrollToElement($('#games div.block_container:eq(' + (activeBlock + 1) + ')'), true, true);
            } else {
                mainScrollApi.scrollToElement($('#games div.block_container:eq(' + activeBlock + ')'), true, true);
            };
        };
        break;
    case 13:
        // ENTER
        if (typeof (mainScrollApi) == 'object') {
            mainScrollApi.scrollToElement($('#games div.block_container:eq(' + activeBlock + ')'), true, true);
            showProject(activeBlock, 1000);
        }
        break;
    case 38:
        // UP
        if (projectOpened) {
            if (typeof (projectOuterScrollApi) == 'object') {
                if ($.browser.mozilla) {
                    projectOuterScrollApi.scrollByY(-50, false);
                } else {
                    projectOuterScrollApi.scrollByY(-100, '1000');
                };
            };
        } else if (infoOpened) {
            if (typeof (infoOuterScrollApi) == 'object') {
                if ($.browser.mozilla) {
                    infoOuterScrollApi.scrollByY(-50, false);
                } else {
                    infoOuterScrollApi.scrollByY(-100, '1000');
                };
            };
        } else {
            if (typeof (mainScrollApi) == 'object') {
                if ($.browser.mozilla) {
                    mainScrollApi.scrollByX(-50, false);
                } else {
                    mainScrollApi.scrollByX(-300, '1000');
                };
            }
        };
        break;
    case 40:
        // DOWN
        if (projectOpened) {
            if (typeof (projectOuterScrollApi) == 'object') {
                if ($.browser.mozilla) {
                    projectOuterScrollApi.scrollByY(50, false);
                } else {
                    projectOuterScrollApi.scrollByY(100, '1000');
                };
            };
        } else if (infoOpened) {
            if (typeof (infoOuterScrollApi) == 'object') {
                if ($.browser.mozilla) {
                    infoOuterScrollApi.scrollByY(50, false);
                } else {
                    infoOuterScrollApi.scrollByY(100, '1000');
                };
            };
        } else {
            if (typeof (mainScrollApi) == 'object') {
                if ($.browser.mozilla) {
                    mainScrollApi.scrollByX(50, false);
                } else {
                    mainScrollApi.scrollByX(300, '1000');
                };
            }
        };
        break;
    }
});

jQuery.fn.exists = function () {
    return this.length > 0;
};

function hideGal() {
	$('#jquery-lightbox').remove();
	$('#jquery-overlay').fadeOut(function () {
		$('#jquery-overlay').remove();
	});
	$('embed, object, select').css({
		'visibility': 'visible'
	});
	$('#gal-pages, #gal-close').remove();
}

var jsReady = false;
function isReady() {
	return jsReady;
}
function pageInit() {
	jsReady = true;
}
function thisMovie(movieName) {
	if (navigator.appName.indexOf("Microsoft") != -1) {
		return window[movieName];
	} else {
		return document[movieName];
	}
}
function updateMovieUrl(value) {
	thisMovie("VideoPlayer").updateMovieUrl(value);
}
function onFlashPlayerReady() {
	updateMovieUrl(currentMovieUrl);
}