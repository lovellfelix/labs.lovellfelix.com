var sortingOrder = 'age';
function MainCtrl($scope, $filter, $http) {
//TODO add parse support for json
$http.get('data/project_list.json').success(function(data) {
$scope.thing = data;});
$scope.active = function(x) {
        return x == $scope.cat ? 'active' : '';
    }
    // init
    $scope.sortingOrder = sortingOrder;
    $scope.reverse = false;
    $scope.filteredItems = [];
    $scope.groupedItems = [];
    $scope.itemsPerPage = 6;
    $scope.pagedItems = [];
    $scope.currentPage = 0;
    $scope.items = [
{
     "age": 0,
     "id": "ems",
     "name": "Employee Management System",
     "snippet": "Employee Management System (EMS) - User Profile, Contact Information, Secure login, and Payroll Reports.",
     "technology": "PHP · MySQL · PHOTOSHOP",
     "thumb": "img/thumbnail/ems.jpg",
     "cat":"web",
     "status":"wip"

    },{
     "age": 1,
     "id": "dbi",
     "name": "Database Installer",
     "snippet": "Website Database installer wizard written in PHP.",
     "technology": "PHP · SQL · Twitter Bootstrap",
     "thumb": "img/thumbnail/db-installer.png",
     "cat":"web",
     "status":"grad"

    },
    {
     "age": 2,
     "id": "gb",
     "name": "Grenadian Buzz",
     "snippet": "An easy way to listen popular Grenadian Radio Stations overseas or on the go.",
     "technology": "ANDROID · JAVA · PHP",
     "thumb": "img/thumbnail/gbuzz.png",
     "cat":"mob",
	 "status":"wip"
 },
    {
     "age": 3,
     "id": "lnsta",
     "name": "lnsta",
     "snippet": "A simple and clean user interface web application designed for Instagram interaction on the Web.",
     "technology": "PHP · MySQL · Instagram API · Google MAP API · Twitter Bootstrap· PHOTOSHOP",
     "thumb": "img/thumbnail/lnsta.png",
     "cat":"web",
	 "status":"wip"
 },

   {
    "age": 4,
     "id": "iul",
     "name": "Image uploader",
     "snippet": "Clean and simple image uploader and viewer built with Twitter Bootstrap, Java script and PHP.",
     "technology": "PHP · Java script · Twitter Bootstrap",
     "thumb": "img/thumbnail/img-uploader.png",
     "cat":"web",
     "status":"grad"
 },

   {
    "age": 5,
     "id": "ttb",
     "name": "Twitter bootstrap theme for Tumblr",
     "snippet": "Tumblr theme built with Twitter bootstrap. Built with three things in-mind, clear typography, large media content and readability.",
     "technology": "HTML· Twitter Bootstrap",
     "thumb": "img/thumbnail/blog.png",
     "cat":"web",
     "status":"grad"
 }, 

{
     "age": 6,
     "id": "gvidz",
     "name": "G-VIDZ.COM",
     "snippet": "G-VIDZ.COM is the number one source for Grenadian videos.",
     "technology": "PHP · SMARTY · JQUERY· HTML5· CSS",
     "thumb": "img/thumbnail/g-vidz.com.png",
     "cat":"web",
	 "status":"grad"
 },
 
{
     "age": 7,
     "id": "gce",
     "name": "G-VIDZ.COM Chrome Extension",
     "snippet": "The Next, Next Generation tablet.",
     "technology": "Json · Java Script · HTML5· CSS",
     "thumb": "img/thumbnail/gchrome.png",
     "cat":"web",
	 "status":"wip"
 },
 
 {
     "age": 8,
     "id": "xml",
     "name": "XML Generator",
     "snippet": "Dynamically create xml file using PHP and MySQL",
     "technology": "PHP · MySQL · XML",
     "thumb": "img/no-photo.png",
     "cat":"web",
	 "status":"grad"
 },

 {
     "age": 9,
     "id": "ta",
     "name": "Time AGO",
     "snippet": "Facebook style time ago php function",
     "technology": "PHP",
     "thumb": "img/no-photo.png",
     "cat":"web",
	 "status":"wip"
 },
 
 {
     "age": 10,
     "id": "hm",
     "name": "Hotel Reversation Application",
     "snippet": "A simple reservation application written in VB that fascilitate easy capture of information from guest, and convert them into meaningful data.",
     "technology": "VB",
     "thumb": "img/thumbnail/HR.png",
     "cat":"web",
	 "status":"wip"
 },  
 
 {
     "age": 11,
     "id": "ra",
     "name": "Restaurant Web Application",
     "snippet": "A Simple Restaurant Operation Web Application.",
     "technology": "VB",
     "thumb": "img/no-photo.png",
     "cat":"web",
	 "status":"wip"
 },

 {
     "age": 12,
     "id": "sj",
     "name": "Spice Jamz Radio",
     "snippet": "Radio Social Media Network.",
     "technology": "PHP · Java Script · HTML5· CSS",
     "thumb": "img/no-photo.png",
     "cat":"web",
	 "status":"wip"
 }, ];

    var searchMatch = function (haystack, needle) {
        if (!needle) {
            return true;
        }
        return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
    };

    // init the filtered items
    $scope.search = function () {
        $scope.filteredItems = $filter('filter')($scope.items, function (item) {
            for(var attr in item) {
                if (searchMatch(item[attr], $scope.query))
                    return true;
            }
            return false;
        });
        // take care of the sorting order
        if ($scope.sortingOrder !== '') {
            $scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sortingOrder, $scope.reverse);
        }
        $scope.currentPage = 0;
        // now group by pages
        $scope.groupToPages();
    };
    
    // calculate page in place
    $scope.groupToPages = function () {
        $scope.pagedItems = [];
        
        for (var i = 0; i < $scope.filteredItems.length; i++) {
            if (i % $scope.itemsPerPage === 0) {
                $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [ $scope.filteredItems[i] ];
            } else {
                $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.filteredItems[i]);
            }
        }
    };
    
    $scope.range = function (start, end) {
        var ret = [];
        if (!end) {
            end = start;
            start = 0;
        }
        for (var i = start; i < end; i++) {
            ret.push(i);
        }
        return ret;
    };
    
    $scope.prevPage = function () {
        if ($scope.currentPage > 0) {
            $scope.currentPage--;
        }
    };
    
    $scope.nextPage = function () {
        if ($scope.currentPage < $scope.pagedItems.length - 1) {
            $scope.currentPage++;
        }
    };
    
    $scope.setPage = function () {
        $scope.currentPage = this.n;
    };

    // functions have been describe process the data for display
    $scope.search();

    // change sorting order
    $scope.sort_by = function(newSortingOrder) {
        if ($scope.sortingOrder == newSortingOrder)
            $scope.reverse = !$scope.reverse;

        $scope.sortingOrder = newSortingOrder;

        // icon setup
        $('th i').each(function(){
            // icon reset
            $(this).removeClass().addClass('icon-sort');
        });
        if ($scope.reverse)
            $('th.'+new_sorting_order+' i').removeClass().addClass('icon-chevron-up');
        else
            $('th.'+new_sorting_order+' i').removeClass().addClass('icon-chevron-down');
    };
};
//ctrlRead.$inject = ['$scope', '$filter'];
