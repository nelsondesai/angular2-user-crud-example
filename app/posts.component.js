System.register(['angular2/core', './posts.service', './spinner.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, posts_service_1, spinner_component_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent(_postsServicee) {
                    this._postsServicee = _postsServicee;
                    this.title = 'Posts';
                    this.isLoading = true;
                }
                PostsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._postsServicee.getPosts().subscribe(function (posts) { return _this.posts = posts; }, null, function () { _this.isLoading = false; });
                };
                PostsComponent.prototype.select = function (post) {
                    var _this = this;
                    this.currentPost = post;
                    this._postsServicee.getComments(post.id)
                        .subscribe(function (comments) { return _this.currentPost.comments = comments; });
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        templateUrl: "app/posts.component.html",
                        styles: ["\n         .posts li { cursor: default; }\n         .posts li:hover { background: #ecf0f1; } \n         .list-group-item.active, \n         .list-group-item.active:hover, \n         .list-group-item.active:focus { \n             background-color: #ecf0f1;\n             border-color: #ecf0f1; \n             color: #2c3e50;\n         }\n         .thumbnail {\n            border-radius: 100%;\n        } \n     "],
                        providers: [posts_service_1.PostsService],
                        directives: [spinner_component_1.SpinnerComponent]
                    }), 
                    __metadata('design:paramtypes', [posts_service_1.PostsService])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.component.js.map