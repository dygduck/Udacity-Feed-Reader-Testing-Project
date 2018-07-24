
 */
$(function() {
    var startEntries;
    var endEntries;

    describe('RSS Feeds', function() {
        // tests that the allFeeds variable has been defined and it is not empty.

        it('feeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // tests that each feed in allFeeds object has a URL defined and that the URL is not empty.

         it('URLs are defined', function() {
           for (var i =0; i < allFeeds.length; i++) {
             expect(allFeeds[i].url).toBeDefined();
             expect(allFeeds[i].url.length).not.toBe(0);
           };
         });

        // tests that each feed in allFeeds object has a name defined and that the name is not empty.

         it('names are defined', function() {
           for (var i =0; i < allFeeds.length; i++) {
             expect(allFeeds[i].name).toBeDefined();
             expect(allFeeds[i].name.length).not.toBe(0);
           };
         });
    });

    describe('The menu', function() {

         // tests that the menu element is hidden by default.
         it('menu element is hidden', function() {
             expect($('body').hasClass('menu-hidden')).toEqual(true);
         });

          // tests that the menu changes visibility when the menu icon is clicked.

          it('menu changes visibility once clicked', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });
      });

    describe('Initial Entries', function() {

         // tests that when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.

         beforeEach(function(done) {
           loadFeed(0, function() {
             done();
           });
         });

         it('there is at least a single entry', function() {
             expect($('.entry .feed')).toBeDefined();
         });
    });

    describe('New Feed Selection', function() {

         // tests that when a new feed is loaded by the loadFeed function the content actually changes.

         beforeEach(function(done) {
           $('.feed').empty();
           loadFeed(0, function() {
             startEntries = $('.feed').html();
             loadFeed(1, function(){
               endEntries = $('.feed').html();
               done();
           });
         });

         it('the content changes', function() {
             expect(startEntries).not.toBe(endEntries);
         });
    });
}());
