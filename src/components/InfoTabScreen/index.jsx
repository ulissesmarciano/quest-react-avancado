import { useState } from 'react'
import { Container, FistTabContent, Tab, TabContentContainer, TabHeaderContainer } from './styles';

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
