import React from 'react'
import styled from 'styled-components'
function Header() {
  return (
    <Nav>
        <Logo src="/images/logo.svg"></Logo>
        <NavMenu>
            <a>
                <img src="/images/home-icon.svg"/>
                <span>HOME</span>
            </a>
            <a>
                <img src="/images/search-icon.svg"/>
                <span>SEARCH</span>
            </a>
            <a>
                <img src="/images/watchlist-icon.svg"/>
                <span>WATCHLIST</span>
            </a>
            <a>
                <img src="/images/original-icon.svg"/>
                <span>ORIGINAL</span>
            </a>
            <a>
                <img src="/images/movie-icon.svg"/>
                <span>MOVIE</span>
            </a>
            <a>
                <img src="/images/series-icon.svg"/>
                <span>SERIES</span>
            </a>
            
        </NavMenu>
        <UserImg src="images/user.png"></UserImg>
    </Nav>
  )
}

export default Header


const Nav = styled.div`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
`

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1; //填滿nav剩餘空間
    margin-left: 25px;
    align-items: center;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }

        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after {
                content: '';
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right:0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transform: scale(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

            }


        }
    }
`

const UserImg = styled.img`
    width: 50px;
    border-radius: 50%; //變成圓形
    cursor:pointer;
`