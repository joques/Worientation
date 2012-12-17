/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    
    fillFacultyProgramme: function(facultyName) {
        //generate the date and pass it as an argument
        var programmeDetails = "";
        switch (facultyName) {
            case "healthsc":
                programmeDetails = this.generateHealthScienceProgramme();
                break;
            case "humanities":
                programmeDetails = this.generateHumanitiesProgramme();
                break;
            case "commerce":
                programmeDetails = this.generateCommerceProgramme();
                break;
            case "engineering":
                programmeDetails = this.generateEngineeringProgramme();
                break;
            case "science":
                programmeDetails = this.generateScienceProgramme();
                break;
            case "sport":
                programmeDetails = this.generateSportProgramme();
                break;
            default : programmeDetails = this.generateHealthScienceProgramme();
        }
        return programmeDetails;
    },
    
    generateHealthScienceProgramme: function() {
        return this.generateProgramme("Health Sciences", null, null);
    },
    
    generateHumanitiesProgramme: function() {
        return this.generateProgramme("Humanities", null, null);
    },
    
    generateCommerceProgramme: function() {
        return this.generateProgramme("Commerce, Law &amp; Management", null, null);
    },
    
    generateEngineeringProgramme: function() {
        return this.generateProgramme("Engineering &amp; Built Environment", null, null);
    },
    
    generateScienceProgramme: function() {
        return this.generateProgramme("Science", null, null);
    },
    
    generateSportProgramme: function() {
        return this.generateProgramme("Sport", null, null);
    },
    
    generateProgramme: function (facultyName, programmeData, linkToFac) {
        var programmeStr = "<table class=\"table table-hover table-bordered\">";
        programmeStr = programmeStr.concat("<caption>Faculty of <strong>" + facultyName + "</strong></caption>");
        programmeStr = programmeStr.concat("<thead>");
        programmeStr = programmeStr.concat("<tr>");
        programmeStr = programmeStr.concat("<th>Time</th>");
        programmeStr = programmeStr.concat("<th>Event</th>");
        programmeStr = programmeStr.concat("<th>Venue</th>");
        programmeStr = programmeStr.concat("</tr>");
        programmeStr = programmeStr.concat("</thead>");
        programmeStr = programmeStr.concat("<tbody>");
        programmeStr = programmeStr.concat("<tr class=\"info\">");
        programmeStr = programmeStr.concat("<td>10:00-12:30</td>");
        programmeStr = programmeStr.concat("<td>Meeting with the Dean</td>");
        programmeStr = programmeStr.concat("<td>Great Hall</td>");
        programmeStr = programmeStr.concat("</tr>");
        programmeStr = programmeStr.concat("<tr class=\"warning\">");
        programmeStr = programmeStr.concat("<td>10:00-12:30</td>");
        programmeStr = programmeStr.concat("<td>Meeting with the Dean</td>");
        programmeStr = programmeStr.concat("<td>Great Hall</td>");
        programmeStr = programmeStr.concat("</tr>");
        programmeStr = programmeStr.concat("<tr class=\"info\">");
        programmeStr = programmeStr.concat("<td>10:00-12:30</td>");
        programmeStr = programmeStr.concat("<td>Meeting with the Dean</td>");
        programmeStr = programmeStr.concat("<td>Great Hall</td>");
        programmeStr = programmeStr.concat("</tr>");
        programmeStr = programmeStr.concat("<tr class=\"warning\">");
        programmeStr = programmeStr.concat("<td>10:00-12:30</td>");
        programmeStr = programmeStr.concat("<td>Meeting with the Dean</td>");
        programmeStr = programmeStr.concat("<td>Great Hall</td>");
        programmeStr = programmeStr.concat("</tr>");
        programmeStr = programmeStr.concat("</tbody>");
        programmeStr = programmeStr.concat("</table>");
        programmeStr = programmeStr.concat("<div>");
        programmeStr = programmeStr.concat("<a href=\"#\" class=\"pull-left\">Faculty Programme</a>");
        programmeStr = programmeStr.concat("<a href=\"#\" class=\"pull-right\">Orientation Programme</a>");
        programmeStr = programmeStr.concat("</div>");
        return programmeStr;    
    }
};
