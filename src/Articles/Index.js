import React from 'react';
import Entry1 from './Entry1';
import { Item, Icon, Header } from 'semantic-ui-react';

const ArticleList = () => {
  return (
    <div>
      <Header as="h2" icon textAlign="center">
        <Icon name="feed" circular style={{ color: 'teal' }} />
        <Header.Content>Articles</Header.Content>
      </Header>
      <p>Mauris sem velit, vehicula eget sodales vitae, rhoncus eget sapien:</p>
      <hr />
      <Item.Group divided>
        <Item>
          <Item.Image size="small" src="http://via.placeholder.com/350x450" />

          <Item.Content>
            <Item.Header as="a">Article 1</Item.Header>
            <Item.Description>
              <p>
                <Entry1 />
              </p>
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    </div>
  );
};
export default ArticleList;
