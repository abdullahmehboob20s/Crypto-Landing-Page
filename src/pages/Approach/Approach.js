import Wrapper from "layouts/Wrapper/Wrapper";
import React from "react";
import "./Approach.css";

function Approach() {
  return (
    <Wrapper>
      <div className="approach-body ">
        <div className="approach-content">
          <div className="approach-content-left">
            <p className="fs-20px white weight-7">
              Our approach to the market:
            </p>

            <div className="approach-content-left-content">
              <p className="fs-20px white weight-7 mb-20px">
                As we all know the cryptocurrency markets are highly volatile
                and returns might be as volatile.
              </p>
              <p className="fs-20px white weight-7">
                That's why we developed a set of tools and strategies to
                generate profits regardless of market conditions and trends.
              </p>
            </div>
          </div>
          <div className="approach-content-right">
            <p className="fs-20px white weight-7 mb-20px">Our toolskit:</p>
            <ul>
              <li className="fs-20px white weight-7 mb-15px">
                Quantitative models to understand macro-market conditions
              </li>
              <li className="fs-20px white weight-7 mb-15px">
                Fundamental Analysis of CryptoCurrency Projects(Tokenomics,
                Value Proposition, Market Positioning, Development Activity,
                Market Interest)
              </li>
              <li className="fs-20px white weight-7 mb-15px">
                DeFi trading strategies to earn interest on volatilie and
                stablecoins(Money Markets, Liquidity Incentives)
              </li>
              <li className="fs-20px white weight-7 mb-15px">
                Delta neutral Strategies that take advanage of market
                inefficiencies
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Approach;
