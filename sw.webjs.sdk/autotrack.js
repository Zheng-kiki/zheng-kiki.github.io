;(function (para) {
  var p = para.sdk_url,
      n = para.name,
      w = window,
      d = document,
      s = 'script',
      x = null,
      y = null
  if (typeof w['sensorsDataAnalytic201505sw'] !== 'undefined') {
    return false
  }
  w['sensorsDataAnalytic201505sw'] = n
  w[n] =
      w[n] ||
      function (a) {
        return function () {
          ;(w[n]._q = w[n]._q || []).push([a, arguments])
        }
      }
  var ifs = [
    'track',
    'quick',
    'register',
    'registerPage',
    'registerOnce',
    'trackSignup',
    'trackAbtest',
    'setProfile',
    'setOnceProfile',
    'appendProfile',
    'incrementProfile',
    'deleteProfile',
    'unsetProfile',
    'identify',
    'login',
    'logout',
    'trackLink',
    'clearAllRegister',
    'getAppStatus'
  ]
  for (var i = 0; i < ifs.length; i++) {
    w[n][ifs[i]] = w[n].call(null, ifs[i])
  }
  if (!w[n]._t) {
    w[n].para = para

    var scriptURLs = [
      'sw.webjs.sdk/plugins/session-event/index.js',
      p
    ]

    function loadScript(index) {
      if (index >= scriptURLs.length) {
        return false
      }

      var x = d.createElement(s)
      y = d.getElementsByTagName(s)[0]
      x.async = 1
      x.src = scriptURLs[index]
      x.setAttribute('charset', 'UTF-8')
      x.onload = function () {
        loadScript(index + 1)
      }
      y.parentNode.insertBefore(x, y)
    }

    loadScript(0)
  }
  sensors_sw.quick('isReady', function () {
    sensors_sw.use('PageLeave', { heartbeat_interval_time: 5 })
    sensors_sw.use('PageLoad')
    sensors_sw.use('SessionEvent')
  })
  sensors_sw.quick('autoTrackSinglePage')
})({
  sdk_url: 'sw.webjs.sdk/sensorsdata.js',
  name: 'sensors_sw',
  show_log: true,
  is_track_single_page: true,
  send_type: 'beacon',
  server_url: 'https://yyjxpj.zj.gov.cn:8206/receiver/api/gp?project=yyjxpj&token=zjszrzyzczhjgxt_3acebc64a37e40320078f28291f4dea3',
  heatmap: {
    clickmap: 'default',
    scroll_notice_map: 'default',
    collect_tags: {
      div: true,
      img: true
    }
  },
  preset_properties: { latest_referrer_host: true }
})