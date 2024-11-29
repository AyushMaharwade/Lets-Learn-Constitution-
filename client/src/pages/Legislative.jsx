
const Legislative = () => {
  return (
    <div><div className="bg-gray-50 p-8">
    {/* Header Section */}
    <header className="text-center mb-8">
      <h1 className="text-xl font-semibold text-blue-600">
        Learn Constitution of India
      </h1>
      <h2 className="text-3xl font-bold mt-2">Executive</h2>
    </header>

    {/* Main Content */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Introduction Section */}
      <div className="md:col-span-2">
        <h3 className="text-lg font-bold mb-4">Introduction</h3>
        <p className="bg-blue-800 text-white p-4 rounded">
          Lorem jjahfd sdfi dfisdf bsdi dsifkkdb djbfjbdjf jfjjfjbjcj dcjdbcdjv
          jvbvbj lorem jjahfd sdfi dfisdf bsdi dsi fkdk bdjbjfbfjfjfj
          fjbcjcdjbcjdy jvbvbj lorem jjahfd sdfi dfisdf bsdi das ifkkd
          bdjbjfjf jfbjfjf fjbcjcdjbcjdy jvbvbj lorem jjahfd sdfi dfisdf
          bsdi dsifkkdbdjbfjfb djf jjfjjfbcjcdjbcjdy jvbvbj.
        </p>
      </div>

      {/* More Resource Section */}
      <div>
        <h3 className="text-lg font-bold mb-4">More Resource</h3>
        <div className="bg-gray-200 h-24 rounded mb-4"></div>
        <div className="bg-gray-200 h-24 rounded mb-4"></div>
        <div className="bg-gray-200 h-24 rounded"></div>
      </div>
    </div>

    {/* More to Learn Section */}
    <div className="mt-12">
      <h3 className="text-lg font-bold mb-4">More to Learn</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-200 h-24 rounded"></div>
        <div className="col-span-2 bg-white p-4 shadow rounded">
          <h4 className="text-lg font-bold mb-2">Article VI</h4>
          <p className="text-gray-600 mb-4">
            Lorem jjahfd sdfi dfisdf bsdi dsifkkdb djbfjbdjf...
          </p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
            Read
          </button>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default Legislative