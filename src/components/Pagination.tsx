import React, { useEffect } from 'react';
import Prism from 'prismjs'

function Pagination() {
    // React hook to get syntax highlighing. Similar to componentDidMount()
    useEffect(() => {
        Prism.highlightAll();
    });

    const code1 =
        `<ul className="pagination" role="menubar" aria-label="Pages">
    <li className="previous">
        <button>
            <i className="las la-arrow-circle-left"></i>
            <span className="sr-only">Previous page</span>
        </button>
    </li>
    <li><button>1</button></li>
    <li><button>2</button></li>
    <li><button>3</button></li>
    <li className="current">
        <button>4</button>
    </li>
    <li><button>5</button></li>
    <li><button>6</button></li>
    <li><button>7</button></li>
    <li><button>8</button></li>
    <li><button>9</button></li>
    <li><button>10</button></li>
    <li className="next">
        <button>
            <i className="las la-arrow-circle-right"></i>
            <span className="sr-only">Next page</span>
        </button>
    </li>
</ul>`;

    return (
        <div>
            <h1>Pagination</h1>
            <p>This component is useful for indicating and traversing multi-page content on a webpage.</p>

            <h3>When to use this component</h3>
            <p>The Paginatin component is recommended for use search results spread accross multiple pages or if a Table component has overflow and cam be traversed.</p>

            <h3>When not to use this component</h3>
            <p>Do not use this component if there is only one page of content.</p>

            <h3>Snippet</h3>
            <ul className="pagination" role="menubar" aria-label="Pages">
                <li className="previous">
                    <button>
                        <i className="las la-arrow-circle-left"></i>
                        <span className="sr-only">Previous page</span>
                    </button>
                </li>
                <li><button>1</button></li>
                <li><button>2</button></li>
                <li><button>3</button></li>
                <li className="current">
                    <button>4</button>
                </li>
                <li><button>5</button></li>
                <li><button>6</button></li>
                <li><button>7</button></li>
                <li><button>8</button></li>
                <li><button>9</button></li>
                <li><button>10</button></li>
                <li className="next">
                    <button>
                        <i className="las la-arrow-circle-right"></i>
                        <span className="sr-only">Next page</span>
                    </button>
                </li>
            </ul>
            <pre>
                <code className="language-javascript">
                    {code1}
                </code>
            </pre>
        </div>
    )
}

export default Pagination

