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
//        window.localStorage.removeItem("login");
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
        var healthScData = this.getHealthScienceProgrammeData();
        return this.generateProgramme("Health Sciences", healthScData, "healthsc-prog.html");
    },
    
    getHealthScienceProgrammeData: function() {
        var healthScData = [
        {
                            eventDate: "2013/01/08",
                            eventStart: "08:15",
                            eventEnd: "09:30",
                            suffix: "PM",
                            eventTitle: "Meeting with the Dean",
                            eventDesc: "A desc goes here",
                            eventVenue: "Great Hall"
        },

        {
                            eventDate: "2013/01/08",
                            eventStart: "10:30",
                            eventEnd: "12:00",
                            suffix: "PM",
                            eventTitle: "Meeting with the Dean",
                            eventDesc: "A desc goes here",
                            eventVenue: "Great Hall"
        },
        {
                            eventDate: "2013/01/08",
                            eventStart: "10:30",
                            eventEnd: "12:00",
                            suffix: "PM",
                            eventTitle: "A Career in Health Sciences",
                            eventDesc: "Desc goes here",
                            eventVenue: "Great Hall"
        },
        {
                            eventDate: "2013/01/08",
                            eventStart: "10:30",
                            eventEnd: "12:00",
                            suffix: "AM",
                            eventTitle: "Meeting with Facluty",
                            eventDesc: "A desc goes here",
                            eventVenue: "Great Hall"
        },
        {
                            eventDate: "2013/01/09",
                            eventStart: "14:30",
                            eventEnd: "16:00",
                            suffix: "PM",
                            eventTitle: "A Career in Health Sciences",
                            eventDesc: "Desc goes here",
                            eventVenue: "Great Hall"
        },
        {
                            eventDate: "2013/01/06",
                            eventStart: "10:30",
                            eventEnd: "12:00",
                            suffix: "AM",
                            eventTitle: "Meeting with Facluty",
                            eventDesc: "A desc goes here",
                            eventVenue: "Great Hall"
        },
                            {
                            eventDate: "2013/01/07",
                            eventStart: "08:15",
                            eventEnd: "09:30",
                            suffix: "AM",
                            eventTitle: "Meeting with the Dean",
                            eventDesc: "A desc goes here",
                            eventVenue: "Great Hall"
                            },
                            
                            {
                            eventDate: "2013/01/07",
                            eventStart: "10:30",
                            eventEnd: "12:00",
                            suffix: "AM",
                            eventTitle: "Meeting with the Dean",
                            eventDesc: "A desc goes here",
                            eventVenue: "Great Hall"
                            },
                            {
                            eventDate: "2013/01/07",
                            eventStart: "10:30",
                            eventEnd: "12:00",
                            suffix: "PM",
                            eventTitle: "A Career in Health Sciences",
                            eventDesc: "Desc goes here",
                            eventVenue: "Great Hall"
                            },
                            {
                            eventDate: "2013/01/07",
                            eventStart: "10:30",
                            eventEnd: "12:00",
                            suffix: "AM",
                            eventTitle: "Meeting with Facluty",
                            eventDesc: "A desc goes here",
                            eventVenue: "Great Hall"
                            },
                            {
                            eventDate: "2013/01/09",
                            eventStart: "14:30",
                            eventEnd: "16:00",
                            suffix: "PM",
                            eventTitle: "A Career in Health Sciences",
                            eventDesc: "Desc goes here",
                            eventVenue: "Great Hall"
                            },
                            {
                            eventDate: "2013/01/06",
                            eventStart: "10:30",
                            eventEnd: "12:00",
                            suffix: "AM",
                            eventTitle: "Meeting with Facluty",
                            eventDesc: "A desc goes here",
                            eventVenue: "Great Hall"
                            },
        

        ];
        
        return healthScData;
    },
    
    generateHumanitiesProgramme: function() {
        var humanitiesData = this.getHumanitiesProgrammeData();
        return this.generateProgramme("Humanities", humanitiesData, "humanities-prog.html");
    },
    
    getHumanitiesProgrammeData: function() {
        var humanitiesData = [
                              {
                              eventDate: "2013/01/07",
                              eventStart: "08:15",
                              eventEnd: "09:30",
                              suffix: "AM",
                              eventTitle: "Meeting with the Dean",
                              eventDesc: "A desc goes here",
                              eventVenue: "Great Hall"
                              },
                              
                              {
                              eventDate: "2013/01/07",
                              eventStart: "10:30",
                              eventEnd: "12:00",
                              suffix: "AM",
                              eventTitle: "Meeting with the Dean",
                              eventDesc: "A desc goes here",
                              eventVenue: "Great Hall"
                              },
                              {
                              eventDate: "2013/01/07",
                              eventStart: "10:30",
                              eventEnd: "12:00",
                              suffix: "PM",
                              eventTitle: "A Career in Health Sciences",
                              eventDesc: "Desc goes here",
                              eventVenue: "Great Hall"
                              },
                              {
                              eventDate: "2013/01/07",
                              eventStart: "10:30",
                              eventEnd: "12:00",
                              suffix: "AM",
                              eventTitle: "Meeting with Facluty",
                              eventDesc: "A desc goes here",
                              eventVenue: "Great Hall"
                              },
                              {
                              eventDate: "2013/01/09",
                              eventStart: "14:30",
                              eventEnd: "16:00",
                              suffix: "PM",
                              eventTitle: "A Career in Health Sciences",
                              eventDesc: "Desc goes here",
                              eventVenue: "Great Hall"
                              },
                              {
                              eventDate: "2013/01/06",
                              eventStart: "10:30",
                              eventEnd: "12:00",
                              suffix: "AM",
                              eventTitle: "Meeting with Facluty",
                              eventDesc: "A desc goes here",
                              eventVenue: "Great Hall"
                              }
                              
                              ];

        return humanitiesData;
    },
    
    generateCommerceProgramme: function() {
        var commerceData = this.getCommerceProgrammeData();
        return this.generateProgramme("Commerce, Law &amp; Management", commerceData, "commerce-prog.html");
    },
    
    getCommerceProgrammeData: function() {
        var commerceData = [
                            {
                            eventDate: "2013/01/07",
                            eventStart: "08:15",
                            eventEnd: "09:30",
                            suffix: "AM",
                            eventTitle: "Meeting with the Dean",
                            eventDesc: "A desc goes here",
                            eventVenue: "Great Hall"
                            },
                            
                            {
                            eventDate: "2013/01/07",
                            eventStart: "10:30",
                            eventEnd: "12:00",
                            suffix: "AM",
                            eventTitle: "Meeting with the Dean",
                            eventDesc: "A desc goes here",
                            eventVenue: "Great Hall"
                            },
                            {
                            eventDate: "2013/01/07",
                            eventStart: "10:30",
                            eventEnd: "12:00",
                            suffix: "PM",
                            eventTitle: "A Career in Health Sciences",
                            eventDesc: "Desc goes here",
                            eventVenue: "Great Hall"
                            },
                            {
                            eventDate: "2013/01/07",
                            eventStart: "10:30",
                            eventEnd: "12:00",
                            suffix: "AM",
                            eventTitle: "Meeting with Facluty",
                            eventDesc: "A desc goes here",
                            eventVenue: "Great Hall"
                            },
                            {
                            eventDate: "2013/01/09",
                            eventStart: "14:30",
                            eventEnd: "16:00",
                            suffix: "PM",
                            eventTitle: "A Career in Health Sciences",
                            eventDesc: "Desc goes here",
                            eventVenue: "Great Hall"
                            },
                            {
                            eventDate: "2013/01/06",
                            eventStart: "10:30",
                            eventEnd: "12:00",
                            suffix: "AM",
                            eventTitle: "Meeting with Facluty",
                            eventDesc: "A desc goes here",
                            eventVenue: "Great Hall"
                            }
                            
                            ];

        return commerceData;
    },
    
    generateEngineeringProgramme: function() {
        var engineeringData = this.getEngineeringProgrammeData();
        return this.generateProgramme("Engineering &amp; Built Environment", engineeringData, "engineering-prog.html");
    },
    
    getEngineeringProgrammeData: function() {
        var engineeringData = [
                               {
                               eventDate: "2013/01/07",
                               eventStart: "08:15",
                               eventEnd: "09:30",
                               suffix: "AM",
                               eventTitle: "Meeting with the Dean",
                               eventDesc: "A desc goes here",
                               eventVenue: "Great Hall"
                               },
                               
                               {
                               eventDate: "2013/01/07",
                               eventStart: "10:30",
                               eventEnd: "12:00",
                               suffix: "AM",
                               eventTitle: "Meeting with the Dean",
                               eventDesc: "A desc goes here",
                               eventVenue: "Great Hall"
                               },
                               {
                               eventDate: "2013/01/07",
                               eventStart: "10:30",
                               eventEnd: "12:00",
                               suffix: "PM",
                               eventTitle: "A Career in Health Sciences",
                               eventDesc: "Desc goes here",
                               eventVenue: "Great Hall"
                               },
                               {
                               eventDate: "2013/01/07",
                               eventStart: "10:30",
                               eventEnd: "12:00",
                               suffix: "AM",
                               eventTitle: "Meeting with Facluty",
                               eventDesc: "A desc goes here",
                               eventVenue: "Great Hall"
                               },
                               {
                               eventDate: "2013/01/09",
                               eventStart: "14:30",
                               eventEnd: "16:00",
                               suffix: "PM",
                               eventTitle: "A Career in Health Sciences",
                               eventDesc: "Desc goes here",
                               eventVenue: "Great Hall"
                               },
                               {
                               eventDate: "2013/01/06",
                               eventStart: "10:30",
                               eventEnd: "12:00",
                               suffix: "AM",
                               eventTitle: "Meeting with Facluty",
                               eventDesc: "A desc goes here",
                               eventVenue: "Great Hall"
                               }
                               
                               ];

        return engineeringData;
    },
    
    generateScienceProgramme: function() {
        var scienceData = this.getScienceProgrammeData();
        return this.generateProgramme("Science", scienceData, "science-prog.html");
    },
    
    getScienceProgrammeData: function() {
        var scienceData = [
                           {
                           eventDate: "2013/01/07",
                           eventStart: "08:15",
                           eventEnd: "09:30",
                           suffix: "AM",
                           eventTitle: "Meeting with the Dean",
                           eventDesc: "A desc goes here",
                           eventVenue: "Great Hall"
                           },
                           
                           {
                           eventDate: "2013/01/07",
                           eventStart: "10:30",
                           eventEnd: "12:00",
                           suffix: "AM",
                           eventTitle: "Meeting with the Dean",
                           eventDesc: "A desc goes here",
                           eventVenue: "Great Hall"
                           },
                           {
                           eventDate: "2013/01/07",
                           eventStart: "10:30",
                           eventEnd: "12:00",
                           suffix: "PM",
                           eventTitle: "A Career in Health Sciences",
                           eventDesc: "Desc goes here",
                           eventVenue: "Great Hall"
                           },
                           {
                           eventDate: "2013/01/07",
                           eventStart: "10:30",
                           eventEnd: "12:00",
                           suffix: "AM",
                           eventTitle: "Meeting with Facluty",
                           eventDesc: "A desc goes here",
                           eventVenue: "Great Hall"
                           },
                           {
                           eventDate: "2013/01/09",
                           eventStart: "14:30",
                           eventEnd: "16:00",
                           suffix: "PM",
                           eventTitle: "A Career in Health Sciences",
                           eventDesc: "Desc goes here",
                           eventVenue: "Great Hall"
                           },
                           {
                           eventDate: "2013/01/06",
                           eventStart: "10:30",
                           eventEnd: "12:00",
                           suffix: "AM",
                           eventTitle: "Meeting with Facluty",
                           eventDesc: "A desc goes here",
                           eventVenue: "Great Hall"
                           }
                           
                           ];

        return scienceData;
    },
    
    generateSportProgramme: function() {
        var sportData = this.getSportProgrammeData();
        return this.generateProgramme("Sport", sportData, "sport-prog.html");
    },
    
    getSportProgrammeData: function() {
        var sportData = [
                         {
                         eventDate: "2013/01/07",
                         eventStart: "08:15",
                         eventEnd: "09:30",
                         suffix: "AM",
                         eventTitle: "Meeting with the Dean",
                         eventDesc: "A desc goes here",
                         eventVenue: "Great Hall"
                         },
                         
                         {
                         eventDate: "2013/01/07",
                         eventStart: "10:30",
                         eventEnd: "12:00",
                         suffix: "AM",
                         eventTitle: "Meeting with the Dean",
                         eventDesc: "A desc goes here",
                         eventVenue: "Great Hall"
                         },
                         {
                         eventDate: "2013/01/07",
                         eventStart: "10:30",
                         eventEnd: "12:00",
                         suffix: "PM",
                         eventTitle: "A Career in Health Sciences",
                         eventDesc: "Desc goes here",
                         eventVenue: "Great Hall"
                         },
                         {
                         eventDate: "2013/01/07",
                         eventStart: "10:30",
                         eventEnd: "12:00",
                         suffix: "AM",
                         eventTitle: "Meeting with Facluty",
                         eventDesc: "A desc goes here",
                         eventVenue: "Great Hall"
                         },
                         {
                         eventDate: "2013/01/09",
                         eventStart: "14:30",
                         eventEnd: "16:00",
                         suffix: "PM",
                         eventTitle: "A Career in Health Sciences",
                         eventDesc: "Desc goes here",
                         eventVenue: "Great Hall"
                         },
                         {
                         eventDate: "2013/01/06",
                         eventStart: "10:30",
                         eventEnd: "12:00",
                         suffix: "AM",
                         eventTitle: "Meeting with Facluty",
                         eventDesc: "A desc goes here",
                         eventVenue: "Great Hall"
                         }
                         
                         ];
        return sportData;
    },
    
    generateProgramme: function (facultyName, programmeData, linkToFac) {
        var viewDate = new Date();
        var curSuffix;
        if (viewDate.getHours() >= 12) {
            curSuffix = "PM";
        } else {
            curSuffix = "AM";
        }
        viewDate.setHours(0,0,0,0);
        var programmeStr = "";
        var progTableContent;
        if (curSuffix == "AM") {
            progTableContent = this.generateProgTableAMContent(programmeData, viewDate);
        } else {
            progTableContent = this.generateProgTablePMContent(programmeData, viewDate);
        }
        
        programmeStr = programmeStr.concat("<div class=\"scroller\" id=\"pscroller\">");
        programmeStr = programmeStr.concat("<div class=\"hidden-tablet\">");
        programmeStr = programmeStr.concat("<a href=" + linkToFac + " class=\"pull-left\">Faculty Programme</a>");
        programmeStr = programmeStr.concat("<a href=\"orientation-prog.html\" class=\"pull-right\">Orientation Programme</a>");
        programmeStr = programmeStr.concat("</div>");
        
        if (progTableContent.length == 0) {
            programmeStr = programmeStr.concat("<p class=\"pagination-centered\">No activity planned for");
            if (curSuffix == "AM") {
                programmeStr = programmeStr.concat(" today");
            } else {
                programmeStr = programmeStr.concat(" this afternoon");
            }
            programmeStr = programmeStr.concat("</p>");
        } else {
            programmeStr = programmeStr.concat("<table class=\"table table-hover table-bordered\">");
            programmeStr = programmeStr.concat("<caption>Faculty of <strong>" + facultyName + "</strong></caption>");
            programmeStr = programmeStr.concat("<thead>");
            programmeStr = programmeStr.concat("<tr>");
            programmeStr = programmeStr.concat("<th>Time</th>");
            programmeStr = programmeStr.concat("<th>Event</th>");
            programmeStr = programmeStr.concat("<th>Venue</th>");
            programmeStr = programmeStr.concat("</tr>");
            programmeStr = programmeStr.concat("</thead>");
            programmeStr = programmeStr.concat("<tbody>");
            
            programmeStr = programmeStr.concat(progTableContent);
            
            programmeStr = programmeStr.concat("</tbody>");
            programmeStr = programmeStr.concat("</table>");
        }
        
        programmeStr = programmeStr.concat("<div class=\"hidden-phone\">");
        programmeStr = programmeStr.concat("<a href=" + linkToFac + " class=\"pull-left\">Faculty Programme</a>");
        programmeStr = programmeStr.concat("<a href=\"orientation-prog.html\" class=\"pull-right\">Orientation Programme</a>");
        programmeStr = programmeStr.concat("</div>");
        programmeStr = programmeStr.concat("</div>");
        
        return programmeStr;
    },
    
    generateProgTableContent: function(programmeData, viewDate, ignoreSuffix){
        var progTable = "";
        var j = 0;
        for (var i = 0; i < programmeData.length; i++) {
            var curProg = programmeData[i];
            var curDate = new Date(curProg.eventDate);
            var filterCondition = (curDate.getTime() != viewDate.getTime());
            if (! ignoreSuffix) {
                filterCondition = filterCondition || (curProg.suffix != "PM")
            }
            if (filterCondition) {
                continue;
            } else {
                if (j % 2 == 0) {
                    progTable = progTable.concat("<tr class=\"info\">");
                } else {
                    progTable = progTable.concat("<tr class=\"warning\">");
                }
                j++;
                progTable = progTable.concat("<td>" + curProg.eventStart + "-" + curProg.eventEnd + "</td>");
                progTable = progTable.concat("<td><a class=\"progevt\" rel=popover data-content=\"" + curProg.eventDesc + "\">" + curProg.eventTitle + "</a></td>");
                progTable = progTable.concat("<td>" + curProg.eventVenue + "</td>");
                
                progTable = progTable.concat("</tr>")
            }
        }
        
        return progTable;
    },
    
    generateProgTablePMContent: function(programmeData, viewDate) {
        return this.generateProgTableContent(programmeData, viewDate, false);
    },
    
    generateProgTableAMContent: function(programmeData, viewDate){
        return this.generateProgTableContent(programmeData, viewDate, true);
    }
};
