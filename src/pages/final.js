import React from 'react'
import { graphql } from "gatsby";
import { get } from "lodash"; // Optional
import Layout from '../components/layout'
import Head from '../components/head'
import * as tableStyles from '../styles/sheet.module.scss'
import '../styles/table.css'

const FinalBacklogPage = ({ data }) => {
    const nodes1 = get(data, "allGoogleFinalBacklogSheet.edges", [])
    return (
        <Layout>
            <Head title="Finalized Backlog" />
            <Head title="Criteria" />
            <div className={tableStyles.sticky}>
                <a className={tableStyles.a} href='#sonny'> Sonny</a>
                <a className={tableStyles.a} href='#julian'> Julian</a>
                <a className={tableStyles.a} href='#chad'> Chad</a>
                <a className={tableStyles.a} href='#giovanni'> Giovanni</a>
                <a className={tableStyles.a} href='#chris'> Chris</a>
            </div>
            <h1>Finalized Backlog</h1>
            <table>
                <tr>
                    <th className={tableStyles.td}>
                        <div className={tableStyles.div}>
                            Catagory
                        </div>
                    </th>
                    <th className={tableStyles.td}>
                        <div className={tableStyles.div}>
                            Child User Story
                        </div>
                    </th>
                    <th className={tableStyles.td}>
                        <div className={tableStyles.div}>
                            Implemented By
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
                                <td className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.childUserStories}
                                    </div>
                                </td>
                                <td id={node.node.tag} className={tableStyles.td}>
                                    <div className={tableStyles.div}>
                                        {node.node.implementedBy}
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

export default FinalBacklogPage

export const query1 = graphql`
query{
    allGoogleFinalBacklogSheet(
          sort: { fields: order, order: ASC }
        ){
      edges{
        node{
          category
          childUserStories
          implementedBy
          notes
          order
          tag
        }
      }
    }
  }
`