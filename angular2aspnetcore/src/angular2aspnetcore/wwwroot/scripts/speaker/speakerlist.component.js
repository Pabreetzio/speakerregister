"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var speaker_service_1 = require('../services/speaker.service');
var SpeakerListComponent = (function () {
    function SpeakerListComponent(speakerService, router) {
        this.speakerService = speakerService;
        this.router = router;
    }
    SpeakerListComponent.prototype.ngOnInit = function () {
        this.onGetSpeakers();
    };
    SpeakerListComponent.prototype.onSelect = function (speaker) {
        this.router.navigate(['/speakerdetail', speaker.id]);
    };
    SpeakerListComponent.prototype.onGetSpeakers = function () {
        this.speakers = this.speakerService.getSpeakers();
    };
    SpeakerListComponent.prototype.onAddSpeaker = function () {
        this.router.navigate(['/speakerdetail', 0]);
    };
    SpeakerListComponent = __decorate([
        core_1.Component({
            templateUrl: '../../app/speaker/speakerlist.component.html'
        }), 
        __metadata('design:paramtypes', [speaker_service_1.SpeakerService, router_1.Router])
    ], SpeakerListComponent);
    return SpeakerListComponent;
}());
exports.SpeakerListComponent = SpeakerListComponent;
//# sourceMappingURL=speakerlist.component.js.map