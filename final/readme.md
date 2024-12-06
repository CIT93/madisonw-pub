# 'What to do today?'

"What to do Today" is an app meant to help me with finding out what to do during my periods of free time while avoiding choice paralysis, allowing for me to be productive in some way or get back on forgotten routines.

# Global Variables

* energyscale (number): a 1-100 scale that is based on how much energy I have at the moment ( 1 is very low energy and 100 is high energy)
* todaysdate  (string): holds the current date.
* isitweekend (boolean): returns true if the current date is a weekend and returns false if not.
* productivityscore (number): a score of how productive the activity was based on activity value and energy scale.

# Decision Making Process

If the current date is a weekend and my energy scale is between 90-100, then I would be recommended to study and work on my drawing abilities. The productivity score is increased by 25%.

If the current date is not a weekend and my energy scale is between 70-80, then I would be recommended to play a video game. The productivity score is increased by 15%

If the current date is a weekend and my energy scale is between 10-20, then I would be recommended to take a long nap. The productivity score is decreased by 45%.

If the current date is not a weekend and my energy scale is between 40-50, then I would be recommended to do some stretches. The productivity score is increased by 10%.

#