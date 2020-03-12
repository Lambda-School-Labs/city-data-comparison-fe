import React from "react";
import styled from 'styled-components';

const CategoryContainer = styled.div`
    width: 870px;
`;

const CategoryTitle = styled.h3`
    font-style: normal; 
    font-weight: 500;
    font-size: 42px;
    line-height: 50px;
    margin: 0
`;

const CategoryInfo = styled.div`
    display: flex; 
    flex-wrap: wrap; 
    padding: 20px 0;
`;

const CategoryImgContainer = styled.div`
    height: 270px; 
    width: 290px;
`;

const CategoryImg = styled.img`
    height: 170px; 
    width: 290px; 
    padding-right: 20px;
`;

const CategorySubtitle = styled.h5`
    font-style: normal; 
    font-weight: bold;
    font-size: 24px; 
    line-height: 28px; 
    margin: 10px 0 0 0;
`;

const CategoryWebsite = styled.a`
    text-decoration: none;
`;

const SCPevents = (props) => {
    return (
        <>
            <CategoryContainer>
                <CategoryTitle>Events</CategoryTitle>
                <CategoryInfo>
                {props.events.events.slice(0,3).map(item => (
                    <CategoryImgContainer>
                        <CategoryImg src={item.image_url} />
                        <CategorySubtitle>{item.name}</CategorySubtitle>
                        <CategoryWebsite href={item.event_site_url}>Event Website</CategoryWebsite>
                    </CategoryImgContainer>
                ))}
                </CategoryInfo>
            </CategoryContainer>
        </> 
    )
};

export default SCPevents;