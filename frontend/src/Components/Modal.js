import React from 'react'
// import { } from 'react-icons/'

import styled from "styled-components"


export const Container = styled.div`
    position : fixed;
    width : 100%;
    height: 100vh;
    display : flex;
    align-items : center;
    justify-content : center;
    top: 0;
    z-index: 99999999;
`



export const SModal = styled.div`
    background-color : white;
    border: 5px solid gray;
    border-radius : 20px;
    display : flex;
    flex-direction : column;
    min-height : 30rem;
`

export const CloseWrapper = styled.div`
    width : 100%;
    display : flex;
    align-items : center;
    justify-content : flex-start;
    margin-bottom : -2rem;
    z-index : 99999999;
    cursor : pointer;
`

export const ContentWrapper = styled.div`
    width : 100%;
    display : flex;
`



export const BottomContent = styled.div`
    background-color : white;
    display : flex;
    border-radius : 1rem;
    width : fit-content;
    box-sizing : border-box;
    padding : 2rem 1rem;
    min-height : 5rem;
    margin-left: 5%;
    margin-top: -10rem;
    z-index : 99999;

    > div{
        margin : auto 0.5rem;
    }
`
const Modal = ({ isOpen = false, content, onClose, bottomContent }) => {
    if (!isOpen) {
        return <></>
    }
    return (

        <Container>
            <SModal>
                {/*<CloseWrapper>{navIcon.closeIcon({ size: '2rem', onClick: onClose })}</CloseWrapper>*/}
                <ContentWrapper>
                    {content}
                </ContentWrapper>
                {bottomContent && (
                    <BottomContent>
                        {bottomContent}
                    </BottomContent>
                )}
            </SModal>
        </Container>
    )
}

export default Modal