"use strict";

export class Visitors {

    constructor(logger) {
        this._logger = logger;
    }

    get () {
        return [
            (req, res) => {
                res.render('index');
            }
        ];
    }

    caseStudy() {
        return [
            (req, res) => {
                if(req.params.id == "yourSports") {
                    res.render("yourSports", { title: 'my other page', layout: 'other' } );
                }else if(req.params.id == "theEntertainerMe") {
                    res.render("theEntertainer", { title: 'my other page', layout: 'other' });
                }else if(req.params.id == "cromwellTools") {
                    res.render("cromwell", { title: 'my other page', layout: 'other' });
                }else{
                    res.render("index");
                }

            }
        ];
    }

}
