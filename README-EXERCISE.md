# Assessment for Frontend Position

Here at Helixa one of the main task for a frontend developer is to build useful interfaces in order to display, search and interact with data.

Fot this assessment it is not important to have a great UI in terms of design, but we need to have a consistent and working interface allowing the users to work with data without frictions.

## Introduction

For this assignment what you will build is a single page application with React for querying a dataset of NBA players and their stats.

You will consume this free API: https://www.balldontlie.io/

Endpoints needed to complete the assessment:

- Players list: GET https://www.balldontlie.io/api/v1/players
- Player stats: GET https://www.balldontlie.io/api/v1/season_averages
- Player pic: GET https://nba-players.herokuapp.com/players/{last_name}/{first_name} (You will have to manage the not found case)

In order to speed up development, if you need to, you can use any react components library like ant, Material UI or the one that satisfies you most.

## Tasks

We want to have an homepage with a search input that lets the user search for a specific player.
Once the user has found the player, after clicking on it, is brought to a detail page of the player where he will be able to see the generic info of the player (the ones we get from the players list api).

If you are willing to go the extra mile, you could extend the detail page to include also the following information:

- A picture of the player
- The player's season averages stats

## Submission

You can submit your work through a [GitHub](https://github.com) repository.

The code must be available to us in order to evaluate your submission.

## Evaluation

Our goal is to find answers to these questions:

- Do you master React and its ecosystem?
- Can you design interfaces that are clear and easy to use?
- Do you master your working environment?
- Can your write code that is clean, readable and efficent?
