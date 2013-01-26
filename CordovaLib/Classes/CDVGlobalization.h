/*
 Licensed to the Apache Software Foundation (ASF) under one
 or more contributor license agreements.  See the NOTICE file
 distributed with this work for additional information
 regarding copyright ownership.  The ASF licenses this file
 to you under the Apache License, Version 2.0 (the
 "License"); you may not use this file except in compliance
 with the License.  You may obtain a copy of the License at
<<<<<<< HEAD

 http://www.apache.org/licenses/LICENSE-2.0

=======
 
 http://www.apache.org/licenses/LICENSE-2.0
 
>>>>>>> defda03062e021e4b58df80a6af4bff378b61655
 Unless required by applicable law or agreed to in writing,
 software distributed under the License is distributed on an
 "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, either express or implied.  See the License for the
 specific language governing permissions and limitations
 under the License.
 */

#import <Foundation/Foundation.h>
#import "CDVPlugin.h"

<<<<<<< HEAD
#define CDV_FORMAT_SHORT 0
#define CDV_FORMAT_MEDIUM 1
#define CDV_FORMAT_LONG 2
#define CDV_FORMAT_FULL 3
#define CDV_SELECTOR_MONTHS 0
#define CDV_SELECTOR_DAYS 1
=======
#define CDV_FORMAT_SHORT    0
#define CDV_FORMAT_MEDIUM   1
#define CDV_FORMAT_LONG     2
#define CDV_FORMAT_FULL     3
#define CDV_SELECTOR_MONTHS 0
#define CDV_SELECTOR_DAYS   1
>>>>>>> defda03062e021e4b58df80a6af4bff378b61655

enum CDVGlobalizationError {
    CDV_UNKNOWN_ERROR = 0,
    CDV_FORMATTING_ERROR = 1,
    CDV_PARSING_ERROR = 2,
    CDV_PATTERN_ERROR = 3,
};
typedef NSUInteger CDVGlobalizationError;

<<<<<<< HEAD
=======

>>>>>>> defda03062e021e4b58df80a6af4bff378b61655
@interface CDVGlobalization : CDVPlugin {
    CFLocaleRef currentLocale;
}

<<<<<<< HEAD
- (void)getPreferredLanguage:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

/**
 * Returns the string identifier for the clients current locale setting.
=======
- (void) getPreferredLanguage:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

/**
 * Returns the string identifier for the client’s current locale setting.
>>>>>>> defda03062e021e4b58df80a6af4bff378b61655
 * It returns the locale identifier string to the successCB callback with a
 * properties object as a parameter. If there is an error getting the locale,
 * then the errorCB callback is invoked.
 */
<<<<<<< HEAD
- (void)getLocaleName:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

/**
 * Returns a date formatted as a string according to the clients user preferences and
=======
- (void) getLocaleName:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

/**
 * Returns a date formatted as a string according to the client’s user preferences and
>>>>>>> defda03062e021e4b58df80a6af4bff378b61655
 * calendar using the time zone of the client. It returns the formatted date string to the
 * successCB callback with a properties object as a parameter. If there is an error
 * formatting the date, then the errorCB callback is invoked.
 *
 * options: "date" contains the number of milliseconds that represents the JavaScript date
 */
<<<<<<< HEAD
- (void)dateToString:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

/**
 * Parses a date formatted as a string according to the clients user
=======
- (void) dateToString:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

/**
 * Parses a date formatted as a string according to the client’s user
>>>>>>> defda03062e021e4b58df80a6af4bff378b61655
 * preferences and calendar using the time zone of the client and returns
 * the corresponding date object. It returns the date to the successCB
 * callback with a properties object as a parameter. If there is an error
 * parsing the date string, then the errorCB callback is invoked.
 *
 * options: "dateString" contains the JavaScript string to parse for a date
 */
<<<<<<< HEAD
- (void)stringToDate:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

/**
 * Returns a pattern string for formatting and parsing dates according to the clients
=======
- (void) stringToDate:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

/**
 * Returns a pattern string for formatting and parsing dates according to the client’s
>>>>>>> defda03062e021e4b58df80a6af4bff378b61655
 * user preferences. It returns the pattern to the successCB callback with a
 * properties object as a parameter. If there is an error obtaining the pattern,
 * then the errorCB callback is invoked.
 *
 */
<<<<<<< HEAD
- (void)getDatePattern:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

/**
 * Returns an array of either the names of the months or days of the week
 * according to the clients user preferences and calendar. It returns the array of names to the
=======
- (void) getDatePattern:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

/**
 * Returns an array of either the names of the months or days of the week
 * according to the client’s user preferences and calendar. It returns the array of names to the
>>>>>>> defda03062e021e4b58df80a6af4bff378b61655
 * successCB callback with a properties object as a parameter. If there is an error obtaining the
 * names, then the errorCB callback is invoked.
 *
 */
<<<<<<< HEAD
- (void)getDateNames:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

/**
 * Returns whether daylight savings time is in effect for a given date using the clients
=======
- (void) getDateNames:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

/**
 * Returns whether daylight savings time is in effect for a given date using the client’s
>>>>>>> defda03062e021e4b58df80a6af4bff378b61655
 * time zone and calendar. It returns whether or not daylight savings time is in effect
 * to the successCB callback with a properties object as a parameter. If there is an error
 * reading the date, then the errorCB callback is invoked.
 *
 * options: "date" contains the number of milliseconds that represents the JavaScript date
 *
 */
<<<<<<< HEAD
- (void)isDayLightSavingsTime:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

/**
 * Returns the first day of the week according to the clients user preferences and calendar.
=======
- (void) isDayLightSavingsTime:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

/**
 * Returns the first day of the week according to the client’s user preferences and calendar.
>>>>>>> defda03062e021e4b58df80a6af4bff378b61655
 * The days of the week are numbered starting from 1 where 1 is considered to be Sunday.
 * It returns the day to the successCB callback with a properties object as a parameter.
 * If there is an error obtaining the pattern, then the errorCB callback is invoked.
 *
 */
<<<<<<< HEAD
- (void)getFirstDayOfWeek:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

/**
 * Returns a number formatted as a string according to the clients user preferences.
=======
- (void) getFirstDayOfWeek:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

/**
 * Returns a number formatted as a string according to the client’s user preferences.
>>>>>>> defda03062e021e4b58df80a6af4bff378b61655
 * It returns the formatted number string to the successCB callback with a properties object as a
 * parameter. If there is an error formatting the number, then the errorCB callback is invoked.
 *
 * options: "number" contains the JavaScript number to format
 *
 */
<<<<<<< HEAD
- (void)numberToString:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

/**
 * Parses a number formatted as a string according to the clients user preferences and
=======
- (void) numberToString:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

/**
 * Parses a number formatted as a string according to the client’s user preferences and
>>>>>>> defda03062e021e4b58df80a6af4bff378b61655
 * returns the corresponding number. It returns the number to the successCB callback with a
 * properties object as a parameter. If there is an error parsing the number string, then
 * the errorCB callback is invoked.
 *
 * options: "numberString" contains the JavaScript string to parse for a number
 *
 */
<<<<<<< HEAD
- (void)stringToNumber:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

/**
 * Returns a pattern string for formatting and parsing numbers according to the clients user
=======
- (void) stringToNumber:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

/**
 * Returns a pattern string for formatting and parsing numbers according to the client’s user
>>>>>>> defda03062e021e4b58df80a6af4bff378b61655
 * preferences. It returns the pattern to the successCB callback with a properties object as a
 * parameter. If there is an error obtaining the pattern, then the errorCB callback is invoked.
 *
 */
<<<<<<< HEAD
- (void)getNumberPattern:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

/**
 * Returns a pattern string for formatting and parsing currency values according to the clients
=======
- (void) getNumberPattern:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

/**
 * Returns a pattern string for formatting and parsing currency values according to the client’s
>>>>>>> defda03062e021e4b58df80a6af4bff378b61655
 * user preferences and ISO 4217 currency code. It returns the pattern to the successCB callback with a
 * properties object as a parameter. If there is an error obtaining the pattern, then the errorCB
 * callback is invoked.
 *
 * options: "currencyCode" contains the ISO currency code from JavaScript
 */
<<<<<<< HEAD
- (void)getCurrencyPattern:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

@end
=======
- (void) getCurrencyPattern:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

@end
>>>>>>> defda03062e021e4b58df80a6af4bff378b61655
