import React, { Component } from 'react';
import { Item, Icon, Header } from 'semantic-ui-react';

class Music extends Component {
  render() {
    const description = [
      'Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their',
      'tiny stature, and even others for their massive size.'
    ];
    return (
      <div>
        <Header as="h2" icon textAlign="center">
          <Icon name="sound" circular />
          <Header.Content>Music</Header.Content>
        </Header>
        <p>
          Mauris sem velit, vehicula eget sodales vitae, rhoncus eget sapien:
        </p>
        <hr />
        <Item.Group divided>
          <Item>
            <Item.Image size="small" src="http://via.placeholder.com/350x450" />

            <Item.Content>
              <Item.Header as="a">Music 1</Item.Header>
              <Item.Description>
                <p>{description}</p>
                <p>
                  Many people also have their own barometers for what makes a
                  cute dog.
                </p>
              </Item.Description>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image size="small" src="http://via.placeholder.com/350x450" />

            <Item.Content>
              <Item.Header as="a">Music 2</Item.Header>
              <Item.Description content={description} />
            </Item.Content>
          </Item>

          <Item>
            <Item.Image size="small" src="http://via.placeholder.com/350x450" />
            <Item.Content>
              <Item.Header as="a">Music 3</Item.Header>
              <Item.Description content={description} />
            </Item.Content>
          </Item>
        </Item.Group>
      </div>
    );
  }
}

export default Music;
