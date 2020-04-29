import React from 'react'
import PropTypes from 'prop-types'
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Box = styled.div`
  margin: 15px;
`

const Para = styled.div`
  margin: 10px 0px;
`

const tag = css`
  margin: 0px 5px;
`

const Tile = ({children}) => (
  <div className="tile is-child">
    <Box className="box">
      {children}
    </Box>
  </div>
)

const Tag = ({text}) => (
  <span css={tag} className="tag is-light">text</span>
)

const Card = () => (
  <Tile>
    <strong>
      <a href="https://github.com/MinesJA/spotify_tree_frontend">Spotify Tree</a>
    </strong>
    <Para>A single page web app that allows users to search for a single artist and build a tree based on Spotify's Artist recommendations. </Para>
    
    <em>Built with:</em>
    <Tag text="React"/>
    <Tag text="Rails"/>
    <hr/>
    <em>Deployed with:</em>
    <span className="tag is-light">Heroku</span>
  </Tile>
)

const ItemGrid = ({items}) => {
  return( 
    <div clasName="section">
      <h1> Projects </h1>
      <div className="tile is-ancestor">
        <div className="tile is-12 is-parent">
          
          <Tile>
            <strong>
                <a href="https://github.com/MinesJA/stock_this_product_frontend">Stock this Product</a>
            </strong>
            <p>A Where to Buy page tool to be used by producers looking to help their customers find stores that sell their products. </p>
          </Tile>
          <Tile>
            <strong>
              <a href="https://github.com/MinesJA/tools_of_trade_frontend">Tools of the Trade</a>
            </strong>
            <p>A React/Rails web application for coders to post, vote, save and share tools used to help in development. Users can browse and search posted tools but must be logged in with their Github account to start posting, voting, and saving.</p>
          </Tile>
        </div>
      </div>
    </div>
  )
}

ItemGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.object
  )
}

export default ItemGrid;