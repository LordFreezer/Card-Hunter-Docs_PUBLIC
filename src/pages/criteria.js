import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import * as tableStyles from '../styles/sheet.module.scss'
import { graphql } from "gatsby";
import { get } from "lodash"; // Optional
import '../styles/table.css'
const CriteriaPage = ({ data }) => {
    const nodes1 = get(data, "allGoogleSprint1AcceptSheet.edges", [])
    const nodes2 = get(data, "allGoogleSprint2AcceptSheet.edges", [])
    const nodes3 = get(data, "allGoogleSprint3AcceptSheet.edges", [])
    const nodes4 = get(data, "allGoogleSprint4AcceptSheet.edges", [])
    return (
        <Layout>
            <Head title="Criteria" />
            <div className={tableStyles.sticky}>
                <a className={tableStyles.a} href='#sprint1'> Sprint 1</a>
                <a className={tableStyles.a} href='#sprint2'> Sprint 2</a>
                <a className={tableStyles.a} href='#sprint3'> Sprint 3</a>
                <a className={tableStyles.a} href='#sprint4'> Sprint 4</a>
            </div>
            <div>
                <div id="sprint1"><br /><br /></div>
                <h1>Sprint 1</h1>
                <table>
                    <tr>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Child User Story ID
                            </div>
                        </th>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Acceptance Criteria
                            </div>
                        </th>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Created by
                            </div>
                        </th>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Verified By
                            </div>
                        </th>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Tested By
                            </div>
                        </th>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Result
                            </div>
                        </th>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Note
                            </div>
                        </th>
                    </tr>
                    {
                        nodes1.map(node =>
                            <tr>
                                <td rowspan={node.node.span} id={node.node.hidden} className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.childUser_StoryID}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.acceptanceCriteria}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.createdBy__member_}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.verifiedBy__testEngineer_}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.testedBy__testEngineer_}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.result}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.note}
                                    </div>
                                </td>
                            </tr>
                        )
                    }

                </table>
                <div id="sprint2"><br /><br /></div>
                <h1>Sprint 2</h1>
                <table>
                    <tr>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Child User Story ID
                            </div>
                        </th>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Acceptance Criteria
                            </div>
                        </th>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Created by
                            </div>
                        </th>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Verified By
                            </div>
                        </th>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Tested By
                            </div>
                        </th>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Result
                            </div>
                        </th>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Note
                            </div>
                        </th>
                    </tr>
                    {
                        nodes2.map(node =>
                            <tr>
                                <td rowspan={node.node.span} id={node.node.hidden} className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.childUser_StoryID}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.acceptanceCriteria}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.createdBy__member_}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.verifiedBy__testEngineer_}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.testedBy__testEngineer_}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.result}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.note}
                                    </div>
                                </td>
                            </tr>
                        )
                    }

                </table>
                <div id="sprint3"><br /><br /></div>
                <h1>Sprint 3</h1>
                <table>
                    <tr>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Child User Story ID
                            </div>
                        </th>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Acceptance Criteria
                            </div>
                        </th>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Created by
                            </div>
                        </th>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Verified By
                            </div>
                        </th>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Tested By
                            </div>
                        </th>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Result
                            </div>
                        </th>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Note
                            </div>
                        </th>
                    </tr>
                    {
                        nodes3.map(node =>
                            <tr>
                                <td rowspan={node.node.span} id={node.node.hidden} className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.childUser_StoryID}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.acceptanceCriteria}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.createdBy__member_}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.verifiedBy__testEngineer_}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.testedBy__testEngineer_}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.result}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.note}
                                    </div>
                                </td>
                            </tr>
                        )
                    }

                </table>
                <div id="sprint4"><br /><br /></div>
                <h1>Sprint 4</h1>
                <table>
                    <tr>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Child User Story ID
                            </div>
                        </th>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Acceptance Criteria
                            </div>
                        </th>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Created by
                            </div>
                        </th>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Verified By
                            </div>
                        </th>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Tested By
                            </div>
                        </th>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Result
                            </div>
                        </th>
                        <th className={tableStyles.td}>
                            <div className={tableStyles.div}>
                                Note
                            </div>
                        </th>
                    </tr>
                    {
                        nodes4.map(node =>
                            <tr>
                                <td rowspan={node.node.span} id={node.node.hidden} className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.childUser_StoryID}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.acceptanceCriteria}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.createdBy__member_}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.verifiedBy__testEngineer_}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.testedBy__testEngineer_}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.result}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.note}
                                    </div>
                                </td>
                            </tr>
                        )
                    }

                </table>
            </div>

        </Layout >
    )
}

export default CriteriaPage
export const query = graphql`
query{
    allGoogleSprint1AcceptSheet(
        sort: { fields: order, order: ASC }
      ){
      edges{
        node{
                childUser_StoryID
                acceptanceCriteria
                createdBy__member_
                verifiedBy__testEngineer_
                testedBy__testEngineer_
                result
                note
                span
                hidden
                order
            }
        }
    }
    allGoogleSprint2AcceptSheet(
        sort: { fields: order, order: ASC }
      ){
      edges{
        node{
                childUser_StoryID
                acceptanceCriteria
                createdBy__member_
                verifiedBy__testEngineer_
                testedBy__testEngineer_
                result
                note
                span
                hidden
                order
            }
        }
    }
    allGoogleSprint3AcceptSheet(
        sort: { fields: order, order: ASC }
      ){
      edges{
        node{
                childUser_StoryID
                acceptanceCriteria
                createdBy__member_
                verifiedBy__testEngineer_
                testedBy__testEngineer_
                result
                note
                span
                hidden
                order
            }
        }
    }
    allGoogleSprint4AcceptSheet(
        sort: { fields: order, order: ASC }
      ){
      edges{
        node{
                childUser_StoryID
                acceptanceCriteria
                createdBy__member_
                verifiedBy__testEngineer_
                testedBy__testEngineer_
                result
                note
                span
                hidden
                order
            }
        }
    }
}
`