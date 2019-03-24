import React from 'react'
import PropTypes from 'prop-types'

import {i18n, Link, withNamespaces} from '../i18n'

class Homepage extends React.Component {
    static async getInitialProps() {
        return {
            namespacesRequired: [
                'home',
                'language-selector'
            ],
        }
    }

    constructor() {
        super()
        this.handleLanguageSwitch = this.handleLanguageSwitch.bind(this)
    }

    handleLanguageSwitch(event) {
        i18n.changeLanguage(event.target.value)
    }

    render() {
        const {t} = this.props
        return (
            <React.Fragment>

                <select onChange={this.handleLanguageSwitch}>
                    <option value="">{t('language-selector:defaultText', '-- Change language --')}</option>
                    <option value="en">{t('language-selector:languageEN', 'English')}</option>
                    <option value="nl">{t('language-selector:languageNL', 'Dutch')}</option>
                </select>

                <h1>{t('heading', 'This is an epic application!')}</h1>

                <p>{t('subheading', 'The language of this sentence is English.')}</p>

                <Link href={'/about'}>
                    <button>
                        {t('buttonText', 'Go to about page')}
                    </button>
                </Link>


            </React.Fragment>
        )
    }
}

Homepage.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withNamespaces(['home', 'language-selector'])(Homepage)