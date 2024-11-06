// Parse the JSON data from companiesData
const companies = JSON.parse(companiesData);

// Function constructor for financial calculations
function AcctCalculations(company) {
    const stats = company.stats;
    
    this.marketCap50 = function() {
        return stats.day50MovingAvg * stats.sharesOutstanding;
    };

    this.marketCap200 = function() {
        return stats.day200MovingAvg * stats.sharesOutstanding;
    };

    this.revenue = function() {
        return stats.operatingRevenue - stats.costOfRevenue;
    };

    this.shareholderEquity = function() {
        return stats.totalAssets - stats.totalLiabilities;
    };

    this.day50 = function() {
        return stats.day50MovingAvg;
    };

    this.day200 = function() {
        return stats.day200MovingAvg;
    };

    this.currency = function(num) {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num);
    };
}

// Function to output each company's card
function outputCard(company) {
    const calculations = new AcctCalculations(company);

    document.write(`
        <article class="card">
            <h2>${company.symbol} - ${company.companyName}</h2>
            <div>
                <p>CEO: <span>${company.CEO}</span></p>
                <p>Industry: <span>${company.industry}</span></p>
                <p>Share Price (50-day avg): <span>${calculations.currency(calculations.day50())}</span></p>
                <p>Share Price (200-day avg): <span>${calculations.currency(calculations.day200())}</span></p>
                <p>Market Cap (50-day avg): <span>${calculations.currency(calculations.marketCap50())}</span></p>
                <p>Market Cap (200-day avg): <span>${calculations.currency(calculations.marketCap200())}</span></p>
                <p>Net Revenue: <span>${calculations.currency(calculations.revenue())}</span></p>
                <p>Shareholder Equity: <span>${calculations.currency(calculations.shareholderEquity())}</span></p>
            </div>
            <footer>
    `);

    const outputTag = function(tag) {
        document.write(`<small class="tag">${tag}</small>`);
    };
    company.tags.forEach(tag => outputTag(tag));

    document.write(`
            </footer>
        </article>
    `);
}

// Loop through and output each company card
companies.forEach(company => outputCard(company));
