// ==UserScript==
// @name   Github-plus.js
// @namespace  http://github.com/runexec
// @description Enhancing the sharing experience at Github.com
// @includehttp*://github.com/*/*
// ==/UserScript==

/*
 Copyright (c) 2012 Ryan Kelker and individual contributors.
 ( https://github.com/runexec/Github-plus.js )
 All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions
 are met:
 1. Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer
 in this position and unchanged.
 2. Redistributions in binary form must reproduce the above copyright
 notice, this list of conditions and the following disclaimer in the
 documentation and/or other materials provided with the distribution.
 3. The name of the author may not be used to endorse or promote products
 derived from this software withough specific prior written permission

 THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR
 IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES LOSS OF USE,
 DATA, OR PROFITS OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

var repo = document.getElementsByClassName('pagehead repohead instapaper_ignore readability-menu')[0];
var r_url = document.getElementsByClassName('js-current-repository')[0];
var r_stubs = String(r_url).split('/');
var r_title = r_stubs[3]+'/'+r_stubs[4];
var r_user = r_title.split('/')[0];
var r_project = r_title.split('/')[1];
var r_description = document.getElementsByClassName('repository-description')[0].innerHTML.split('<p>')[1].split('</p>')[0];
// lets start hacking

r = repo;
var original = r.innerHTML;

// Coder Wall profile

r.innerHTML = '<a href="http://coderwall.com/'+r_user+'"><img src="http://coderwall.com/favicon.ico" style="width:22px; height:22px; z-index:999;"></a>';

// Stack Overflow search button

var searchStackOverflow = 'http://stackoverflow.com/search?q='+escape(r_project);
var imageStackOverflow = 'http://sstatic.net/stackoverflow/img/favicon.ico';
r.innerHTML += '<a href="'+searchStackOverflow+'"><img src="'+imageStackOverflow+'" style="width:22px; height:22px; z-index:999;"/></a>&nbsp;';


// Y combinator search button

var submitYcombinator = 'http://www.hnsearch.com/search#request/all&q='+escape(r_project);
var imageYcombinator = 'http://ycombinator.com/favicon.ico';
r.innerHTML += '<a href="'+submitYcombinator+'"><img src="'+imageYcombinator+'" style="width:22px; height:22px; z-index:999;"/></a>&nbsp;';

// Twitter share 

r.innerHTML += ['<a href="http://twitter.com/share?url='+r_url+'&text=Awsome project @ '+escape(r_title)+' #Github-plus.js.js&via=Github-plus.js.js&related=Github">',
                '<img src="https://twitter.com/favicon.ico" style="width:22px; height:22px; z-index:999;"/></a>&nbsp;'].join('\n');
                
// Fuck Google +1 crap ass button

r.innerHTML += ['<a href="https://plusone.google.com/_/+1/confirm?hl=en&url='+r_url+'">',
                '<img src="https://plus.google.com/favicon.ico" style="width:22px; height:22px; z-index:999;"/></a>&nbsp;'].join('\n');


// Digg

r.innerHTML += ['<a href="http://digg.com/submit?phase=2&url='+r_url+'&title=Awsomes Github Project: '+escape(r_title)+'&bodytext='+escape(r_description)+'&topic=">',
		'<img src="http://digg.com/favicon.ico" style="width:22px; height:22px; z-index:999;"/></a>&nbsp;'].join('\n');

// Reddit

r.innerHTML += ['<a href="http://reddit.com/submit?url='+r_url+'&title=Github '+escape(r_title)+'">',
		'<img src="http://reddit.com/favicon.ico" style="width:22px; height:22px; z-index:999;"/></a>&nbsp;'].join('\n');

// Del.icio.us

r.innerHTML += ['<a href="http://del.icio.us/post/?url='+r_url+'&title=Github%20Project '+escape(r_title)+'&notes='+escape(r_description)+'&tags=Github,Github-plus.js">',
		'<img src="http://del.icio.us/favicon.ico" style="width:22px; height:22px; z-index:999;"/></a>&nbsp;'].join('\n');

// Slashdot 
r.innerHTML += ['<a href="http://slashdot.org/submit.pl?email=http://github.com/'+escape(r_user)+'&url='+r_url+'&subj=Github Project '+r_title+'&story='+escape(r_description)+'">',
		'<img src="http://slashdot.org/favicon.ico" style="width:22px; height:22px; z-index:999;"/></a>&nbsp;'].join('\n');

r.innerHTML += original;

