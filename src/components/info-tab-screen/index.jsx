import { useState } from 'react'
import styled from 'styled-components';

const Container = styled.div`

    display: flex;
    flex-direction: column;
`

const TabHeaderContainer = styled.ul`
    display: flex;
    justify-content: space-around;
`

const Tab = styled.li`
    padding: 0.6rem;
    width: 100%;
    border-radius: 0.2rem;
    text-align: center;

    font-weight: 500;
    font-size: 1.2rem;
    
    cursor: pointer;
    transition: 0.3s;

    &:hover{
        background-color: #2899F2;
    }
`

const TabContentContainer = styled.div`
    padding: 1rem;    
`

const FistTabContent = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    @media(min-width: 640px){
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`

const InfoTabScreen = ({ moves, abilities }) => {
    const [activeTab, setActiveTab] = useState("tab1");

    const handleTab1 = () => {
        setActiveTab("tab1");
    };

    const handleTab2 = () => {
        setActiveTab("tab2");
    };

    const FirstTab = ({ moves }) => {
        return (
            <FistTabContent>
                {moves}
            </FistTabContent>
        );
    };

    const SecondTab = ({ abilities }) => {
        return (
            <ul>
                {abilities}
            </ul>
        );
    };


    return (
        <Container className="Tabs">
            <TabHeaderContainer className="nav">
                <Tab
                    className={activeTab === "tab1" ? "active" : ""}
                    onClick={handleTab1}
                >
                    Moves
                </Tab>
                <Tab
                    className={activeTab === "tab2" ? "active" : ""}
                    onClick={handleTab2}
                >
                    Abilities
                </Tab>
            </TabHeaderContainer>
            <TabContentContainer className="outlet">
                {
                    activeTab === "tab1" ?
                        <FirstTab
                            moves={moves}
                        /> :
                        <SecondTab
                            abilities={abilities}
                        />
                }
            </TabContentContainer>
        </Container>
    );
}

export default InfoTabScreen