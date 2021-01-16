import React, { useState } from 'react';

import { Contents } from './styles';

import Modal from '../../components/Modal';
import Frame from '../../components/Frame';
import ItemButton from '../../components/ItemButton';

export default function MainPage() {
  const [contentIdModal, setcontentIdModal] = useState(null);
  const [showModal, setShowModal] = useState(false);

  function handleOpen(id) {
    console.log(id);
    setcontentIdModal(id);
    setShowModal(true);
  }

  function handleClose() {
    setcontentIdModal(null);
    setShowModal(false);
  }

  return (
    <div>
      <Contents showModal={showModal}>
        <ul>
          <li>
            <Frame title={'String Conversions'}>
              <ItemButton onClick={() => handleOpen('escape_str')}>
                Escape String
              </ItemButton>
              <ItemButton onClick={() => handleOpen('encode_uri_str')}>
                Encode URI String
              </ItemButton>
              <ItemButton>Encode URI Compon</ItemButton>
              <ItemButton>Uppercase String</ItemButton>
              <ItemButton>String to Decimal</ItemButton>
              <ItemButton>Unescape String</ItemButton>
              <ItemButton>Decode URI String</ItemButton>
              <ItemButton>Decode URI Compon</ItemButton>
              <ItemButton>Lowercase String</ItemButton>
              <ItemButton>Decimal to String</ItemButton>
            </Frame>
          </li>
          <li>
            <Frame title={'Popular Encryptors and Conversion'}>
              <ItemButton>Caesar Shift Code</ItemButton>
              <ItemButton>MORSE Encoder</ItemButton>
              <ItemButton>Hackerize XS</ItemButton>
              <ItemButton>Reverse String</ItemButton>
              <ItemButton>ASCII to Binary</ItemButton>
              <ItemButton>DES Algorithm</ItemButton>
              <ItemButton>RC 4 Encryption</ItemButton>
              <ItemButton>Encool 2 Symbols</ItemButton>
              <ItemButton>ROT 13</ItemButton>
              <ItemButton>Binary to ASCII</ItemButton>
            </Frame>
          </li>
          <li>
            <Frame
              title={'Fast Encryption (Encode / Encrypt or Decode / Decrypt)'}
            >
              <ItemButton>ATOM 128</ItemButton>
              <ItemButton>BASE 64</ItemButton>
              <ItemButton>MEGAN 35</ItemButton>
              <ItemButton>TRIPO 5</ItemButton>
              <ItemButton>GILA 7</ItemButton>
              <ItemButton>HAZZ 15</ItemButton>
              <ItemButton>ESAB 46</ItemButton>
              <ItemButton>TIGO 3 FX</ItemButton>
              <ItemButton>FERON 74</ItemButton>
              <ItemButton>ZONG 22</ItemButton>
            </Frame>
          </li>
          <li>
            <Frame
              title={'Strong Encryptors (Encode / Encrypt or Decode / Decrypt)'}
            >
              <ItemButton>AER 256</ItemButton>
              <ItemButton>ARMON 64</ItemButton>
              <ItemButton>OKTO 3</ItemButton>
              <ItemButton>EZIP 64</ItemButton>
              <ItemButton>ZARA 128</ItemButton>
              <ItemButton>ARABICA 2 RS</ItemButton>
              <ItemButton>CHINZO 72 C</ItemButton>
              <ItemButton>KOREX 3 S</ItemButton>
              <ItemButton>JAPOO C2 S</ItemButton>
              <ItemButton>HINDIA 4 X</ItemButton>
            </Frame>
          </li>
        </ul>
      </Contents>
      <Modal
        contentId={contentIdModal}
        show={showModal}
        handleClose={handleClose}
      ></Modal>
    </div>
  );
}
