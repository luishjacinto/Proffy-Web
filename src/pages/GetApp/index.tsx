import React, { useState, useEffect } from 'react'
import PageHeader from '../../components/PageHeader';

import qrCode from '../../assets/images/qr-code.svg'

import './styles.css'

function GetApp() {

    return (
        <div id="page-getApp">
            <div id="page-getApp-content" className='container'>
                <PageHeader title="Baixe o App da Proffy"
                    description="Escaneie nosso QR-Code abaixo, baixe o .apk e instale."/>
                <div className="qr-container">
                    <img 
                        src={qrCode} 
                        alt="Proffy download link" 
                        className="qr-code"
                    />
                </div>
            </div>
        </div>
    )
}

export default GetApp