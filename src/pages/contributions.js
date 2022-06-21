import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import * as tableStyles from '../styles/sheet.module.scss'
const ContributionsPage = () => {
    return (
        <Layout>
            <Head title="Contributions" />
            <div className={tableStyles.sticky}>
                <a className={tableStyles.a} href='#proposal'> Proposal</a>
                <a className={tableStyles.a} href='#sprint1'> Sprint 1</a>
                <a className={tableStyles.a} href='#sprint2'> Sprint 2</a>
                <a className={tableStyles.a} href='#sprint3'> Sprint 3</a>
                <a className={tableStyles.a} href='#sprint4'> Sprint 4</a>
                <a className={tableStyles.a} href='#final'> Final Deliverables</a>
            </div>
            <div>
                <div id="proposal"><br /><br /></div>
                <h1>Proposal Preparation and Delivery</h1>
                <strong>Chris Syfrett </strong>
                <table>
                    <tr>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Contribution to the team
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I wrote a list of epic user stories for us to discuss for our final proposal.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I worked with Chad to record our initial project presentation for recruiting other members from the class.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I helped to edit our initial powerpoint for recruiting other members from the class.
                            </div>
                        </td>
                    </tr>
                </table>
                <strong>Giovanni Soto </strong>
                <table>
                    <tr>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Contribution to the team
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I helped construct the PowerPoint presentation with Sonny Icks and form the design of the presentation
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I contributed to the creation of our epic stories during the meeting by adding what I had different to our list.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I finished organizing and submitting the documentation needed, as per my Scrum Leader position.
                            </div>
                        </td>
                    </tr>
                </table>
                <strong>Chad Marshall </strong>
                <table>
                    <tr>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Contribution to the team
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Helped create initial presentation video with Chris that was showed in class
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Created working demonstrations of ParseHub that we will use for application
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Created and pushed initial project to shared repository on GitHub
                            </div>
                        </td>
                    </tr>
                </table>
                <strong>Sonny Icks </strong>
                <table>
                    <tr>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Contribution to the team
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I drew up some initial screens drafts for the application based on epic stories.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I researched potential designs for the screens of the app
                            </div>
                        </td>
                    </tr>
                </table>
                <strong>Julian Shen </strong>
                <table>
                    <tr>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Contribution to the team
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I compiled the full list of epics that everyone submitted into a cohesive list, removing duplicate stories as well as structuring between epics versus child user stories.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I developed a general storymap as a starting point for everyone to configure priority and sprint goals.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I helped to contribute the storymap-slides in the proposal powerpoint.
                            </div>
                        </td>
                    </tr>
                </table>
                <div id="sprint1"><br /><br /></div>
                <h1>Sprint 1</h1>
                <strong>Chris Syfrett</strong>
                <table>
                    <tr>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Accomplishments in assigned programming tasks
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I designed the navigation structure for the community section of the app.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I implemented the beginning of the forum layout for the community section of the app.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I implemented the ability for users to submit new threads on the forum
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I designed and implemented a data structure to hold the forum thread information.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I implemented the FirestoreController class so we can easily add new cloud-based functionality.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I implemented code to pull the forum thread data from the cloud and convert it back into my local data structure for handling forum threads.
                            </div>
                        </td>
                    </tr>
                    <table>
                        <tr>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>Contributions to the team beyond programming</div>

                            </th>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>Who received this help</div>
                            </th>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>When</div>
                            </th>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    I made a suggestion for how we could compartmentalize our code and pass data to our individual sections of our app in order for us to be able to code more effectively without tightly tangling our code bases.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    While it helped with all of our code implementations, it was in response to a question raised by Sonny.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    2/13/22
                                </div>
                            </td>
                        </tr>
                    </table>
                </table>
                <strong>Giovanni Soto</strong>
                <table>
                    <tr>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Accomplishments in assigned programming tasks
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I completed creating the Order History component of the first sprint.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I completed creating the Wishlist component of the first sprint.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I linked the two pages to the user home screen so that we are able to navigate back and forth.
                            </div>
                        </td>
                    </tr>
                    <table>
                        <tr>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>Contributions to the team beyond programming</div>

                            </th>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>Who received this help</div>
                            </th>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>When</div>
                            </th>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    I led the scrum meetings as the scrum master, helping to ensure efficiency and to remind the members of upcoming deadlines, current issues, and time constraints.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    I was able to help resolve a meeting time with time constraints for Chris who needed a resource for class. I was also able to clarify backlog formatting for Chad. I was also able to confirm an emergency meeting for Chad’s funeral emergency.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    The first instance was 2/17/22.

                                    The second instance was 2/18/22.

                                    The third instance was 2/17/22.
                                </div>
                            </td>
                        </tr>
                    </table>
                </table>
                <strong>Chad Marshall</strong>
                <table>
                    <tr>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Accomplishments in assigned programming tasks
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I implemented the ability to send POST and GET requests so that the app can use external APIs
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I created the classes and factories for parsing JSON so that response data could be used.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I created the ability to search for cards by patching arguments into the http GET request
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Implemented GET request for Scryfall and added results screen to display response data
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                created the GET and POST daisy chain for ParseHub runs which will be expanded on Sprint 2</div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Added MyDialog class to control CircularProgressIndicators for ParseHub calls
                            </div>
                        </td>
                    </tr>
                    <table>
                        <tr>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>Contributions to the team beyond programming</div>

                            </th>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>Who received this help</div>
                            </th>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>When</div>
                            </th>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    Created the GitHub repository and help manage merges
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    Conversly, Julian helped me greatly with learning Git and managing pulls/merges
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    Feb 15-18
                                </div>
                            </td>
                        </tr>
                    </table>
                </table>
                <strong>Sonny Icks</strong>
                <table>
                    <tr>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Accomplishments in assigned programming tasks
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I created the card inventory screen that currently displays a test inventory of cards
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I created a deck screen that shows the build of someone’s deck and allows it to be edited
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I created a test card class to allow for testing of the inventory and deck screens in preparation for the firebase stored cards (firebase card inventory in development)
                            </div>
                        </td>
                    </tr>
                    <table>
                        <tr>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>Contributions to the team beyond programming</div>

                            </th>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>Who received this help</div>
                            </th>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>When</div>
                            </th>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    I posted some of the install and run errors/solutions that I had when initially installing flutter to assist other teammates who may have similar issues
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    the group
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    2.13.22
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    I drew up some UI designs for the home, inventory and card cost screens
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    the group
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    2.3.22
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    I found a way our group could record individually to streamline our recording process
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    the group
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    2.20.22
                                </div>
                            </td>
                        </tr>
                    </table>
                </table>
                <strong>Julian Shen</strong>
                <table>
                    <tr>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Accomplishments in assigned programming tasks
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I created the Sign in screen that allows users to log into the app.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I created a means for the user to log out of the app in the hamburger menu of the home screen.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I created the Create Account screen that allows new users to create an account to access the app.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I created the User settings screen that allows users to update their username, email, and password, as well as allowing them to delete their account from the app.
                            </div>
                        </td>
                    </tr>
                    <table>
                        <tr>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>Contributions to the team beyond programming</div>

                            </th>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>Who received this help</div>
                            </th>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>When</div>
                            </th>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    I set/standardized the GitHub best practices for the team to ensure proper branching, pushing, and merging as well as a means of updating the Git administrator via discord to keep the team up to date with the current main branch.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    This helped teammates who utilized the github account, which was everyone.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    2.11.22
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    I provided bug fix suggestions for future/current issues such as how to change the path if a teammate’s emulator runs into the error of not having enough disk space as well as how to update the Flutter SDK to the current standards.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    This helped any teammates who might have run into similar emulator issues or Flutter SDK versioning issues.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    2.15.22
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    I fixed the base version of the code on GitHub when there were initial conflicts between 3 branches not having been pushed, and I reset it to be useable by the team.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    This helped teammates who utilized the github account, which was everyone.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    2.14.22
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    I took the role of Git administrator for Sprint 1 by taking care of merging the pull requests and fixing any merge conflicts.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    This helped any teammates who submitted their code to be merged into the main branch, which was everyone.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    2.14.22
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    I adjusted everyone’s pages visually by making sure the app bar look, page background coloring, and any other visuals were uniform to promote a cohesive looking app.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    This helped adjust the community home screen, add thread screen, deck screen, forum screen, home screen, inventory screen, purchase history screen, and wishlist screen, which included all the teammembers.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    2.18.22
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    I provided a video as to how to format the Product Sprint Backlog when each member adds their user stories and acceptance criteria.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    This helped any teammates who contributed to the backlog and had trouble with formatting the excel spreadsheet template.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    2.8.22
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    I helped fix Giovannis App Bar back button issue in the Wish List screen.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    Giovanni
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    2.18.22
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    I compiled the Product Sprint Backlog and the child user story numbering to be presentable because the format I set up suggested leaving space between each members stories and criteria in case of future add-ons.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    This helped all the teammates who contributed to the backlog, which was everyone.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    2.19.22
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    I took the role of testing engineer and verified/tested everyone’s acceptance criteria for the child user stories (except for my own criteria, of which Chad tested)
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    This helped everyone who contributed acceptance criteria for their user stories (except for my own user stories).
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    2.19.22
                                </div>
                            </td>
                        </tr>
                    </table>
                </table>
                <div id="sprint2"><br /><br /></div>
                <h1>Sprint 2</h1>
                <strong>Chris Syfrett</strong>
                <table>
                    <tr>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Accomplishments in assigned programming tasks
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I created a way to reply to forum threads on the community forum thread view screens of the app
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I resolved a DateTime data type issue in the Firstore Database
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I created a way to view forum threads and display all of their posts under the community forum screen of the app
                            </div>
                        </td>
                    </tr>
                    <table>
                        <tr>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>Contributions to the team beyond programming</div>

                            </th>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>Who received this help</div>
                            </th>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>When</div>
                            </th>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    Worked to find a work around for permissions access for user auth in Firestore
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    Julian
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    3/1/2022
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    Provided video for sprint presentation
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    Sonny
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    3/6/2022
                                </div>
                            </td>
                        </tr>
                    </table>
                </table>
                <strong>Giovanni Soto</strong>
                <table>
                    <tr>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Accomplishments in assigned programming tasks
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I created a search icon in the Wishlist page that allows for easier card search within the page.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                A confirmation page has been created that shows users successful purchase and allows navigation.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I have added code in Results to allow for an icon clicked to navigate to Wishlist.
                            </div>
                        </td>
                    </tr>
                    <table>
                        <tr>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>Contributions to the team beyond programming</div>

                            </th>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>Who received this help</div>
                            </th>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>When</div>
                            </th>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    I helped Sonny Icks fix his contributions portion for Sprint 2.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    Sonny Icks
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    3/4/2022
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    I formatted and re edited the resubmission slides on our PPT presentation so that Sonny Icks could successfully create a new video.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    Sonny Icks
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    3/3/2022
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    I corrected grammatical and formatting errors within the backlog so that no abbreviations were found and everything within the backlog was clear and concise.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    This was ensured to help any teammates that had maybe forgotten or overlooked the required specifications for that document by Dr. Zuo.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    3/3/2022
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    I conducted roles as Scrum leader and completed the tasks needed for my Team, include documentation organization and completion for Sprint 2, confirming every team member has finalized their documentation changes, and submitting the finalized Sprint 2 materials.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    This was for the help of the entire team to ensure optimal success and accountability, and to make sure everyone completed all tasks in a timely manner.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    3/4/2022
                                </div>
                            </td>
                        </tr>
                    </table>
                </table>
                <strong>Chad Marshall</strong>
                <table>
                    <tr>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Accomplishments in assigned programming tasks
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I created a hamburger menu that houses checkmark boxes which act as a price filter for prices displayed under the card. The list of boxes are dynamic and only appear for prices that non
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I also assisted others with various bug fixes
                            </div>
                        </td>
                    </tr>
                    <table>
                        <tr>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>Contributions to the team beyond programming</div>

                            </th>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>Who received this help</div>
                            </th>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>When</div>
                            </th>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    I discussed possible implementations of user search integrated with the wishl
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    Giovanni
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    March 2nd
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    I discussed the use of Snapshot to get queried card data for deck builder implementation.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    Sonny
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    March 1st
                                </div>
                            </td>
                        </tr>
                    </table>
                </table>
                <strong>Sonny Icks</strong>
                <table>
                    <tr>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Accomplishments in assigned programming tasks
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I created a MagicCard class that takes information from the search results and adds the card to the inventory
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                A detailed view of has been created in the inventory that allows you to add/remove cards from inventory
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                A floating button has been added to the inventory screen to allow you to search for a card from there
                            </div>
                        </td>
                    </tr>
                    <table>
                        <tr>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>Contributions to the team beyond programming</div>

                            </th>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>Who received this help</div>
                            </th>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>When</div>
                            </th>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    Chad and I discussed best implementation for a Magic Card with using the search
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    whole team
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    3/1/2022
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    Assisted with meeting guidance and structure during scheduled meetings </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    whole team
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    various
                                </div>
                            </td>
                        </tr>
                    </table>
                </table>
                <strong>Julian Shen</strong>
                <table>
                    <tr>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Accomplishments in assigned programming tasks
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                For almost all of the pages, I adjusted everyone’s app bar content to include a means of getting and displaying the user’s profile picture.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Within the User Settings screen, I added an area where the user can add/update their profile picture and save the changes.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I added background images to Sign-In, User-Settings, Community-Home, Deck, and Inventory screens for a more attractive looking app.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I added Firebase cloud storage functionality for anyone needing to upload files.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I added Firebase firestore functionality for anyone needing to access/reference the user data information for their pages.
                            </div>
                        </td>
                    </tr>
                    <table>
                        <tr>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>Contributions to the team beyond programming</div>

                            </th>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>Who received this help</div>
                            </th>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>When</div>
                            </th>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    Helped Giovanni trouble-shoot a scope issue involving navigation routes in main.dart page.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    Giovanni
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    3/2
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    Helped Giovanni trouble-shoot implementing navigation to Home Screen from confirmation screen
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    Giovanni
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    3/2
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    I made a video explaining the process of pulling from github before pushing your code to solidify Github protocol as Git Administrator as well as providing a reference link for other useful git commands.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    This helped the whole team because of many merge conflicts due to different versions when pushing.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    3/3
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    helped adapt Giovanni’s Confirmation page in navigation by adhering to the concept of keeping the homepage an anchor by ‘popping’ back to Home  rather than a circular model where you navigate to any page at any point.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    Giovanni
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    3/5
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    I took the role of Git administrator by taking care of merging the pull requests and fixing any merge conflicts.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    This helped any teammates who submitted their code to be merged into the main branch, which was everyone.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    2/21
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    I took the role of testing engineer and verified/adjusted/tested everyone’s acceptance criteria for the child user stories (except for my own criteria, of which Chad tested)
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    This helped everyone who contributed acceptance criteria for their user stories (except for my own user stories).
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    3/4
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    I refactored Chad’s home_screen.dart to fit the MVC architecture before everyone started working for sprint 2 to minimize future merge conflicts.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    Chad
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    2/22
                                </div>
                            </td>
                        </tr>
                    </table>
                </table>
                <div id="sprint3"><br /><br /></div>
                <h1>Sprint 3</h1>
                <strong>Chris Syfrett</strong>
                <table>
                    <tr>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Accomplishments in assigned programming tasks
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I created and implemented a direct messaging system.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I made names dynamically appear in forum threads and direct messaging threads.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I created a class to fetch user data from FIrebase without having to grab the same duplicate data multiple times.
                            </div>
                        </td>
                    </tr>
                    <table>
                        <tr>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>Contributions to the team beyond programming</div>

                            </th>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>Who received this help</div>
                            </th>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>When</div>
                            </th>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    I hosted a celebratory cookout at my house for the team to celebrate the end of Sprint 2
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    All group members were invited to the cookout
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    3/12/22
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    Because our project revolves around the game Magic: The Gathering, I showed members some additional ways and formats to play the game.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    Julian and Sonny
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    3/12/22
                                </div>
                            </td>
                        </tr>
                    </table>
                </table>
                <strong>Giovanni Soto</strong>
                <table>
                    <tr>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Accomplishments in assigned programming tasks
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I created collections for storing wishlist and purchase history information.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I implemented the data stored in firebase to display on the corresponding pages.
                            </div>
                        </td>
                    </tr>
                    <table>
                        <tr>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>Contributions to the team beyond programming</div>

                            </th>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>Who received this help</div>
                            </th>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>When</div>
                            </th>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    I completed my role as the Scrum Master and organized and gathered all documentation needed for the submission.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    The entire group has benefited from my actions as Scrum Master due to making sure everyone has completed their documentation and that the submission was turned in, in a manner that satisfies all requirements.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    3/26/22
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>

                                    Attempted to test the card search function to see if Chad’s changes to Scryfall model were different.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    Chad
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    3/24/22
                                </div>
                            </td>
                        </tr>
                    </table>
                </table>
                <strong>Chad Marshall</strong>
                <table>
                    <tr>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Accomplishments in assigned programming tasks
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I created a toggle that can switch in-between search mode. The two modes being searching for a card and Searching for a set
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I created the model for parsing api data from a new api that is being pushed to sprint 4
                            </div>
                        </td>
                    </tr>
                    <table>
                        <tr>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>Contributions to the team beyond programming</div>

                            </th>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>Who received this help</div>
                            </th>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>When</div>
                            </th>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    I took on the role of tester for this sprint and tested all criteria for user stories except my own.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    The entire group benefited from testing as I provided feedback on almost every criteria.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    3/25/22 and 3/26/22
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    I helped Giovanni in regards to passing data back and forth between screens with Flutter’s Navigator (pushnamed).
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    Giovanni
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    3/24/22
                                </div>
                            </td>
                        </tr>
                    </table>
                </table>
                <strong>Sonny Icks</strong>
                <table>
                    <tr>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Accomplishments in assigned programming tasks
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I wrote the functions for uploading, retrieving, updating and deleting Magic Cards from firebase.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                The inventory and deck screens now show cards saved on firebase for the specific user logged in
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I created a deck class so that users can now assign Magic Cards to Multiple decks
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I wrote the functions for uploading and retrieving Decks  from firebase.
                            </div>
                        </td>
                    </tr>
                    <table>
                        <tr>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>Contributions to the team beyond programming</div>

                            </th>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>Who received this help</div>
                            </th>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>When</div>
                            </th>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    I contributed food to the potluck team building event hosted by Chris
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    Chris, Julian
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    3/13/22
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    I assisted Giovanni with coming up with a strategy for saving prices and wishlists in firebase
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    Giovanni
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    3/25/22
                                </div>
                            </td>
                        </tr>
                    </table>
                </table>
                <strong>Julian Shen</strong>
                <table>
                    <tr>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Accomplishments in assigned programming tasks
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I updated the functions for updating user account info on the Firestore database.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I added a means for admin accounts (admin@test.com/super@test.com) to be able to access all user’s account info to change the user’s credentials as needed.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I added background pictures to all remaining/newly added pages except for ‘Create New Thread’ page and the search results page.
                            </div>
                        </td>
                    </tr>
                    <table>
                        <tr>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>Contributions to the team beyond programming</div>

                            </th>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>Who received this help</div>
                            </th>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>When</div>
                            </th>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    I contributed food to the potluck team building event hosted by Chris
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    Chris, Sonny (the members who were able to attend)
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    3/13/22
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    I took the role of Git administrator by taking care of merging the pull requests and fixing any merge conflicts.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    This helped any teammates who submitted their code to be merged into the main branch, which was everyone.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    Throughout sprint-3
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    I tested Chad’s acceptance criteria (since the person writing the test shouldn’t test their own criteria).
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    Chad
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    3/26/22
                                </div>
                            </td>
                        </tr>
                    </table>
                </table>
                <div id="sprint4"><br /><br /></div>
                <h1>Sprint 4</h1>
                <strong>Chris Syfrett</strong>
                <table>
                    <tr>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Accomplishments in assigned programming tasks
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I created an inbox for the direct messaging system that lets users view all of their direct message conversations in one place.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I created a user search page that lets users search for other users by display name in order to send direct messages to them.
                            </div>
                        </td>
                    </tr>
                    <table>
                        <tr>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>Contributions to the team beyond programming</div>

                            </th>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>Who received this help</div>
                            </th>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>When</div>
                            </th>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    I helped Chad determine the cause of a really obscure bug in our program.  Certain cards would no longer display in the app when we tried to query them.  The cause was that a number of the cards we were testing with were announced to be reprinted with new artwork, but they had not yet been officially released which resulted in a problem with the API.  The announcement of the new art happened during our development this semester.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    Chad
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    3/27/22
                                </div>
                            </td>
                        </tr>
                    </table>
                </table>
                <strong>Giovanni Soto</strong>
                <table>
                    <tr>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Accomplishments in assigned programming tasks
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I added the usd currency displays to the wishlist page and purchase history page to parse and display next to each card item.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I added the total calculation feature to wishlist page and purchase history page for the sum of all cards.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I corrected the interface issues that were present last sprint on wishlist, the screen rendering and the text alignment.
                            </div>
                        </td>
                    </tr>
                    <table>
                        <tr>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>Contributions to the team beyond programming</div>

                            </th>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>Who received this help</div>
                            </th>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>When</div>
                            </th>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    I completed my role as the Scrum Master and organized and gathered all documentation needed for the submission.</div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    The entire group has benefited from my actions as Scrum Master due to making sure everyone has completed their documentation and that the submission was turned in, in a manner that satisfies all requirements.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    4/10/22
                                </div>
                            </td>
                        </tr>
                    </table>
                </table>
                <strong>Chad Marshall</strong>
                <table>
                    <tr>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Accomplishments in assigned programming tasks
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I completed the functionality of searching for a set. One can also page through an entire set
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I also implemented the functionality of long pressing on a card in the set to get to its card page
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Finally, I kept the functionality of Sonny’s Inventory and Giovanni’s Wishlist when going from set results to single cards results
                            </div>
                        </td>
                    </tr>
                    <table>
                        <tr>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>Contributions to the team beyond programming</div>

                            </th>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>Who received this help</div>
                            </th>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>When</div>
                            </th>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    I tested the team’s acceptance criteria with the exception of my own.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    The entire team benefited from the testing feedback.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    4/9/22
                                </div>
                            </td>
                        </tr>
                    </table>
                </table>
                <strong>Sonny Icks</strong>
                <table>
                    <tr>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Accomplishments in assigned programming tasks
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I add functionality that deletes previously added Card decks and the ability to filter the Magic Card inventory to
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                show only cards that are of the selected types.
                            </div>
                        </td>
                    </tr>
                    <table>
                        <tr>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>Contributions to the team beyond programming</div>

                            </th>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>Who received this help</div>
                            </th>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>When</div>
                            </th>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    I formatted the powerpoint for the video presentation
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    The group
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    4/10/22
                                </div>
                            </td>
                        </tr>
                    </table>
                </table>
                <strong>Julian Shen</strong>
                <table>
                    <tr>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Accomplishments in assigned programming tasks
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I added a dynamic ‘Game Play Tools’ page for multiple users to keep track of life point counters, poison counters, energy counters, and daybound/nightbound mode tracking in the card game as well as a dice rolling function.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I edited aspects of each team member’s pages to unify styling, color choices, and backgrounds to ensure a more unified atmosphere to the app.
                            </div>
                        </td>
                    </tr>
                    <table>
                        <tr>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>Contributions to the team beyond programming</div>

                            </th>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>Who received this help</div>
                            </th>
                            <th className={tableStyles.td}>
                                <div className={tableStyles.div}>When</div>
                            </th>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    I took the role of Git administrator by taking care of merging the pull requests and fixing any merge conflicts.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    This helped any teammates who submitted their code to be merged into the main branch, which was everyone.
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    Throughout sprint-4
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    I tested Chad’s acceptance criteria (since the person writing the test shouldn’t test their own criteria).
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    Chad
                                </div>
                            </td>
                            <td className={tableStyles.td}>
                                <div className={tableStyles.div}>
                                    4/9/22
                                </div>
                            </td>
                        </tr>
                    </table>
                </table>
                <div id="final"><br /><br /></div>
                <h1>Final Deliverables</h1>
                <strong>Chris Syfrett</strong>
                <table>
                    <tr>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Contribution to the team
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I reviewed code and added comments and documentation to the project.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I fixed a bug Sonny found in testing inboxes that caused conversations to occasionally not appear.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I volunteered to take lead for preparing for the project presentation
                            </div>
                        </td>
                    </tr>
                </table>
                <strong>Giovanni Soto</strong>
                <table>
                    <tr>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Contribution to the team
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I reviewed code and added comments and documentation to the project.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I attempted to fix any bugs found in my code, in which Sonny Icks found the solution for.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I completed my role as Scrum Leader and got the final deliverables together for submission.
                            </div>
                        </td>
                    </tr>
                </table>
                <strong>Chad Marshall</strong>
                <table>
                    <tr>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Contribution to the team
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I Fixed the issue with displaying single sided multifaceted cards versus double sided multifaced cards in card_results_screen
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I applied the same logic for a similar problem when looking at card images in a set form in set_results_screen
                            </div>
                        </td>
                    </tr>
                </table>
                <strong>Sonny Icks</strong>
                <table>
                    <tr>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Contribution to the team
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Provided bug fixes for wishlist, purchase, deck and inventory screens
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Stress tested all sections of program for bugs and fixed or notified team members accordingly
                            </div>
                        </td>
                    </tr>
                </table>
                <strong>Julian Shen</strong>
                <table>
                    <tr>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Contribution to the team
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                I fixed the issue with the admin/user updating email (Sprint 3 Acceptance Criteria lines 68, 70, and 79)
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Adjusted and fixed new errors found by Sonny regarding email changes on specific accounts.
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </Layout>
    )
}

export default ContributionsPage