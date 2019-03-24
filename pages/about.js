import React from 'react'
import PropTypes from 'prop-types'

import {i18n, Link, withNamespaces} from '../i18n'

class AboutPage extends React.Component {
    static async getInitialProps() {
        return {
            namespacesRequired: [
                'about',
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

                <h1>{t('heading', 'About us')}</h1>

                <Link href={'/'}>
                    <button>
                        {t('buttonText', 'Back to home')}
                    </button>
                </Link>


            </React.Fragment>
        )
    }
}

AboutPage.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withNamespaces(['about', 'language-selector'])(AboutPage)