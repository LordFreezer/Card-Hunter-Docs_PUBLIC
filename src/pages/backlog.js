import React from 'react'
import { graphql } from "gatsby";
import { get } from "lodash"; // Optional
import Layout from '../components/layout'
import Head from '../components/head'
import * as tableStyles from '../styles/sheet.module.scss'
import '../styles/table.css'

const BacklogPage = ({ data }) => {
    const nodes1 = get(data, "allGoogleSprint1Sheet.edges", [])
    const nodes2 = get(data, "allGoogleSprint2Sheet.edges", [])
    const nodes3 = get(data, "allGoogleSprint3Sheet.edges", [])
    const nodes4 = get(data, "allGoogleSprint4Sheet.edges", [])
    return (
        <Layout>
            <Head title="Product Backlog" />
            <Head title="Criteria" />
            <div className={tableStyles.sticky}>
                <a className={tableStyles.a} href='#sprint1'> Sprint 1</a>
                <a className={tableStyles.a} href='#sprint2'> Sprint 2</a>
                <a className={tableStyles.a} href='#sprint3'> Sprint 3</a>
                <a className={tableStyles.a} href='#sprint4'> Sprint 4</a>
            </div>
            <div id="sprint1"><br /><br /></div>
            <h1>Sprint 1</h1>
            <table>
                <tr>
                    <th className={tableStyles.td}>
                        <div className={tableStyles.div}>
                            Catagory
                        </div>
                    </th>
                    <th className={tableStyles.td}>
                        <div className={tableStyles.div}>
                            User Story
                        </div>
                    </th>
                    <th className={tableStyles.td}>
                        <div className={tableStyles.div}>
                            Child User Story ID
                        </div>
                    </th>
                    <th className={tableStyles.td}>
                        <div className={tableStyles.div}>
                            Child User Story
                        </div>
                    </th>
                    <th className={tableStyles.td}>
                        <div className={tableStyles.div}>
                            Assigned To
                        </div>
                    </th>
                    <th className={tableStyles.td}>
                        <div className={tableStyles.div}>
                            Status
                        </div>
                    </th>
                    <th className={tableStyles.td}>
                        <div className={tableStyles.div}>
                            Notes
                        </div>
                    </th>
                </tr>
                {
                    nodes1.map(
                        node =>
                            <tr>
                                <td rowspan={node.node.span} id={node.node.hidden} className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.category}
                                    </div>
                                </td>
                                <td rowspan={node.node.span} id={node.node.hidden} className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.epics}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.childId}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.childUserStories}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.assignedTo}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.status}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.notes}
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
                            Catagory
                        </div>
                    </th>
                    <th className={tableStyles.td}>
                        <div className={tableStyles.div}>
                            User Story
                        </div>
                    </th>
                    <th className={tableStyles.td}>
                        <div className={tableStyles.div}>
                            Child User Story ID
                        </div>
                    </th>
                    <th className={tableStyles.td}>
                        <div className={tableStyles.div}>
                            Child User Story
                        </div>
                    </th>
                    <th className={tableStyles.td}>
                        <div className={tableStyles.div}>
                            Assigned To
                        </div>
                    </th>
                    <th className={tableStyles.td}>
                        <div className={tableStyles.div}>
                            Status
                        </div>
                    </th>
                    <th className={tableStyles.td}>
                        <div className={tableStyles.div}>
                            Notes
                        </div>
                    </th>
                </tr>
                {
                    nodes2.map(
                        node =>
                            <tr>
                                <td rowspan={node.node.span} id={node.node.hidden} className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.category}
                                    </div>
                                </td>
                                <td rowspan={node.node.span} id={node.node.hidden} className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.epics}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.childId}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.childUserStories}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.assignedTo}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.status}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.notes}
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
                            Catagory
                        </div>
                    </th>
                    <th className={tableStyles.td}>
                        <div className={tableStyles.div}>
                            User Story
                        </div>
                    </th>
                    <th className={tableStyles.td}>
                        <div className={tableStyles.div}>
                            Child User Story ID
                        </div>
                    </th>
                    <th className={tableStyles.td}>
                        <div className={tableStyles.div}>
                            Child User Story
                        </div>
                    </th>
                    <th className={tableStyles.td}>
                        <div className={tableStyles.div}>
                            Assigned To
                        </div>
                    </th>
                    <th className={tableStyles.td}>
                        <div className={tableStyles.div}>
                            Status
                        </div>
                    </th>
                    <th className={tableStyles.td}>
                        <div className={tableStyles.div}>
                            Notes
                        </div>
                    </th>
                </tr>
                {
                    nodes3.map(
                        node =>
                            <tr>
                                <td rowspan={node.node.span} id={node.node.hidden} className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.category}
                                    </div>
                                </td>
                                <td rowspan={node.node.span} id={node.node.hidden} className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.epics}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.childId}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.childUserStories}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.assignedTo}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.status}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.notes}
                                    </div>
                                </td>
                            </tr>
                    )
                }
            </table>
            <div id="sprint4"><br /><br /></div>
            <h1 >Sprint 4</h1>
            <table>
                <tr>
                    <th className={tableStyles.td}>
                        <div className={tableStyles.div}>
                            Catagory
                        </div>
                    </th>
                    <th className={tableStyles.td}>
                        <div className={tableStyles.div}>
                            User Story
                        </div>
                    </th>
                    <th className={tableStyles.td}>
                        <div className={tableStyles.div}>
                            Child User Story ID
                        </div>
                    </th>
                    <th className={tableStyles.td}>
                        <div className={tableStyles.div}>
                            Child User Story
                        </div>
                    </th>
                    <th className={tableStyles.td}>
                        <div className={tableStyles.div}>
                            Assigned To
                        </div>
                    </th>
                    <th className={tableStyles.td}>
                        <div className={tableStyles.div}>
                            Status
                        </div>
                    </th>
                    <th className={tableStyles.td}>
                        <div className={tableStyles.div}>
                            Notes
                        </div>
                    </th>
                </tr>
                {
                    nodes4.map(
                        node =>
                            <tr>
                                <td rowspan={node.node.span} id={node.node.hidden} className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.category}
                                    </div>
                                </td>
                                <td rowspan={node.node.span} id={node.node.hidden} className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.epics}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.childId}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.childUserStories}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.assignedTo}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.status}
                                    </div>
                                </td>
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.notes}
                                    </div>
                                </td>
                            </tr>
                    )
                }
            </table>



        </Layout>
    )
}

export default BacklogPage

export const query = graphql`
query{
    allGoogleSprint1Sheet (
        sort: { fields: childId, order: ASC }
      ){
      edges{
        node{
          category
          epics
          childId
          childUserStories
          assignedTo
          status
          notes
          span
          hidden
        }
      }
    }
    allGoogleSprint2Sheet(
        sort: { fields: childId, order: ASC }
      ){
        edges{
          node{
            category
            epics
            childId
            childUserStories
            assignedTo
            status
            notes
            span
            hidden
          }
        }
      }
      allGoogleSprint3Sheet(
        sort: { fields: childId, order: ASC }
      ){
        edges{
          node{
            category
            epics
            childId
            childUserStories
            assignedTo
            status
            notes
            span
            hidden
          }
        }
      }
      allGoogleSprint4Sheet(
        sort: { fields: childId, order: ASC }
      ){
        edges{
          node{
            category
            epics
            childId
            childUserStories
            assignedTo
            status
            notes
            span
            hidden
          }
        }
      }
  }
`
