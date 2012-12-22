Acko.Demo.Script = [
  // Opening zoom & pan
  ['camera.position', 'track', 0, "3.0",
    [
      [0,     [-0.012356919779256095, -0.577765649094616, 0.02370824505027948]],
      [3,     [-0.012356919779256095, -0.577765649094616, 0.02370824505027948]],
      ["0.3.2", [-0.012356919779256095, -0.577765649094616, 0.02370824505027948]],
      ["1.0.3", [-0.012356919779256095, -0.577765649094616, 0.02370824505027948]],
      ["1.1.2.2", [-0.012778464376797834, -0.5527450602036572, 0.0227830932223368]],
      ["1.2.3", [0.34541040539285652, -0.5202064261851147, -0.011189089760156]],
      ["2.0.4", [0.5261610485991556, -0.4339893454728015, 0.5251417669857255]],
      ["2.2.1", [-0.11424505711929578, -0.6068129715213576, 0.15147573790259228]],
      ["2.3.1.2", [-0.28950486582540286, -0.654660725706275, -0.08453131476459458]],
      ["2.4.5", [0.04253567219164697, -0.682239416874534, -0.5399141045850052]],
    ],
  ],

  ['camera.lookAt', 'track', 0, "3.0",
    [
      [0,      [-0.51427065968629645, 4.286139874984093, -8.767791794228863]  ],
      [3,      [-0.51427065968629645, 4.286139874984093, -8.767791794228863]  ],
      ["0.3.1",  [-0.51427065968629645, 4.286139874984093, -8.767791794228863]  ],
      ["1.0.3", [-7.692592827182905, 5.763670146583771, 0.11705525010477046] ],
      ["1.1.2.2", [-1.4395152992227362, -2.6407480436665347, 9.600951247579408] ],
      ["1.2.3",  [5.904210611764578, -3.492299827819838, 6.210539943613929]],
      ["2.0.4", [-8.645094325927722, 2.3586829478821025, -1.7988406687174978]],
      ["2.2.1", [3.445868011085198, 1.0748050503116367, -8.572103195097796]],
      ["2.3.1.2", [9.018761354698041, 3.579361382370958, 3.4868545016578247]],
      ["2.4.5", [-1.2357081982055584, 4.669651531639175, 9.010184269160854]],
    ],
  ],

  ['camera.fov', 'track', 0, "2.2",
    [
      [0, 12],
      ["0.1", 12],
      ["0.2", 22],
      ["0.4", 50],
      ["1.1", 55],
      ["2.2", 55],
    ],
  ],

  // Bring up aurora
  ['visualizer.preset', 'hold', 0, "1.3",
    [
      [0, 0],
      ["1.2", 1],
    ],
  ],
  ['aurora.color1', 'track', 0, 0,
    [
      [0, [0, 0, 0]],
      ["1.2", [0, 0, 0]],
      ["1.3.2", [.2, .5, .03]],
      ["3.3.3", [.2, .5, .03]],
      ["4.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
      ]],
      ["4.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
      ]],
      ["5.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
      ]],
      /////
      ["5.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
      ]],
      ["5.2", [
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
      ]],
      /////
      ["5.2", [
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
      ]],
      ["6.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
      ]],
      /////
      ["6.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
      ]],
      ["6.2", [
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
      ]],
      /////
      ["6.2", [
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
      ]],
      ["7.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
      ]],
      /////
      ["7.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
      ]],
      ["7.2", [
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
      ]],
      /////
      ["7.2", [
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
      ]],
      ["8.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
      ]],
      /////
      ["8.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
      ]],
      ["8.2", [
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
      ]],
      /////
      ["8.2", [
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
      ]],
      ["9.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
      ]],
      /////
      ["9.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .4 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
        function () { return (1.0 + 2.0*exports.barDecay) * .4 },
      ]],
      ["11.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .4 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
        function () { return (1.0 + 2.0*exports.barDecay) * .4 },
      ]],
      ///
      ["11.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * 1 },
        function () { return (1.0 + 2.0*exports.barDecay) * 0 },
        function () { return (1.0 + 2.0*exports.barDecay) * 0 },
      ]],
      ["11.2", [
        function () { return (1.0 + 2.0*exports.barDecay) * 1 },
        function () { return (1.0 + 2.0*exports.barDecay) * 0 },
        function () { return (1.0 + 2.0*exports.barDecay) * 0 },
      ]],
      ///
      ["11.2", [
        function () { return (1.0 + 2.0*exports.barDecay) * 1 },
        function () { return (1.0 + 2.0*exports.barDecay) * 0 },
        function () { return (1.0 + 2.0*exports.barDecay) * 0 },
      ]],
      ["12.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * 1 },
        function () { return (1.0 + 2.0*exports.barDecay) * 0 },
        function () { return (1.0 + 2.0*exports.barDecay) * 0 },
      ]],
      //
      ["12.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
      ]],
      ["12.2", [
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
      ]],
      ["13.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .4 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
        function () { return (1.0 + 2.0*exports.barDecay) * .4 },
      ]],
      ["13.2", [
        function () { return (1.0 + 2.0*exports.barDecay) * 1 },
        function () { return (1.0 + 2.0*exports.barDecay) * -.2 },
        function () { return (1.0 + 2.0*exports.barDecay) * 0 },
      ]],
      ["14.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
      ]],
      ["14.3", [
        function () { return .03 },
        function () { return .2 },
        function () { return .5 },
      ]],
      ["16.3", [
        function () { return .03 },
        function () { return .3 },
        function () { return .5 },
      ]],
      ["17.1", [
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
        function () { return (1.0 + 2.0*exports.barDecay) * .3 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
      ]],
      ["18.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .3 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
        function () { return (1.0 + 2.0*exports.barDecay) * .3 },
      ]],
      ///
      ["18.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
      ]],
      ["18.2", [
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
      ]],
      ///
      ["18.2", [
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
      ]],
      ["19.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
      ]],
      ///
      ["19.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .4 },
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
        function () { return (1.0 + 2.0*exports.barDecay) * .1 },
      ]],
      ["19.2", [
        function () { return (1.0 + 2.0*exports.barDecay) * .4 },
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
        function () { return (1.0 + 2.0*exports.barDecay) * .1 },
      ]],
      ///
      ["19.2", [
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
      ]],
      ["20.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .1 },
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
        function () { return (1.0 + 2.0*exports.barDecay) * .55 },
      ]],

    ],
  ],
  ['aurora.color2', 'track', 0, 0,
    [
      [0, [0, 0, 0]],
      ["1.2", [0, 0, 0]],
      ["1.3.2", [.03, .4, .5]],
      ["3.3.3", [.03, .4, .5]],
      ["4.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
        function () { return (1.0 + 2.0*exports.barDecay) * .4 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
      ]],
      ["4.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
        function () { return (1.0 + 2.0*exports.barDecay) * .4 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
      ]],
      ["5.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
        function () { return (1.0 + 2.0*exports.barDecay) * .4 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
      ]],
      ///
      ["5.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
        function () { return (1.0 + 2.0*exports.barDecay) * .0 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
      ]],
      ["5.2", [
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
        function () { return (1.0 + 2.0*exports.barDecay) * .0 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
      ]],
      ///
      ["5.2", [
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
      ]],
      ["6.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
      ]],
      ///
      ["6.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
        function () { return (1.0 + 2.0*exports.barDecay) * .0 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
      ]],
      ["6.2", [
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
        function () { return (1.0 + 2.0*exports.barDecay) * .0 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
      ]],
      ///
      ["6.2", [
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
      ]],
      ["7.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
      ]],
      ///
      ["7.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
      ]],
      ["7.2", [
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
      ]],
      ///
      ["7.2", [
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
      ]],
      ["8.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
      ]],
      ///
      ["8.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
      ]],
      ["8.2", [
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
      ]],
      ///
      ["8.2", [
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
      ]],
      ["9.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
      ]],
      ///
      ["9.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .0 },
        function () { return (1.0 + 2.0*exports.barDecay) * .3 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
      ]],
      ["11.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .0 },
        function () { return (1.0 + 2.0*exports.barDecay) * .3 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
      ]],
      ///
      ["11.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .0 },
        function () { return (1.0 + 2.0*exports.barDecay) * .3 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
      ]],
      ["11.2", [
        function () { return (1.0 + 2.0*exports.barDecay) * .0 },
        function () { return (1.0 + 2.0*exports.barDecay) * .3 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
      ]],
      ///
      ["11.2", [
        function () { return (1.0 + 2.0*exports.barDecay) * -.6 },
        function () { return (1.0 + 2.0*exports.barDecay) * .7 },
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
      ]],
      ["12.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * -.6 },
        function () { return (1.0 + 2.0*exports.barDecay) * .7 },
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
      ]],
      // 
      ["12.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
        function () { return (1.0 + 2.0*exports.barDecay) * .4 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
      ]],
      ["12.2", [
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
        function () { return (1.0 + 2.0*exports.barDecay) * .0 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
      ]],
      ["13.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
        function () { return (1.0 + 2.0*exports.barDecay) * .0 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
      ]],
      ["13.2", [
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
      ]],
      ["14.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
      ]],
      ["14.3", [
        function () { return .5 },
        function () { return .2 },
        function () { return .03 },
      ]],
      ["16.3", [
        function () { return .03 },
        function () { return .6 },
        function () { return .1 },
      ]],
      ["17.1", [
        function () { return (1.0 + 2.0*exports.barDecay) * .4 },
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
      ]],
      ["18.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .4 },
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
      ]],
      ///
      ["18.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
        function () { return (1.0 + 2.0*exports.barDecay) * .4 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
      ]],
      ["18.2", [
        function () { return (1.0 + 2.0*exports.barDecay) * .03 },
        function () { return (1.0 + 2.0*exports.barDecay) * .4 },
        function () { return (1.0 + 2.0*exports.barDecay) * .5 },
      ]],
      ///
      ["18.2", [
        function () { return (1.0 + 2.0*exports.barDecay) * .3 },
        function () { return (1.0 + 2.0*exports.barDecay) * .3 },
        function () { return (1.0 + 2.0*exports.barDecay) * .3 },
      ]],
      ["19.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .3 },
        function () { return (1.0 + 2.0*exports.barDecay) * .3 },
        function () { return (1.0 + 2.0*exports.barDecay) * .3 },
      ]],
      ///
      ["19.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .1 },
        function () { return (1.0 + 2.0*exports.barDecay) * .05 },
        function () { return (1.0 + 2.0*exports.barDecay) * .4 },
      ]],
      ["19.2", [
        function () { return (1.0 + 2.0*exports.barDecay) * .1 },
        function () { return (1.0 + 2.0*exports.barDecay) * .05 },
        function () { return (1.0 + 2.0*exports.barDecay) * .4 },
      ]],
      ///
      ["19.2", [
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
        function () { return (1.0 + 2.0*exports.barDecay) * .7 },
        function () { return (1.0 + 2.0*exports.barDecay) * .1 },
      ]],
      ["20.0", [
        function () { return (1.0 + 2.0*exports.barDecay) * .1 },
        function () { return (1.0 + 2.0*exports.barDecay) * .7 },
        function () { return (1.0 + 2.0*exports.barDecay) * .2 },
      ]],
    ],
  ],

  // Fish eye cut
  ['camera.fisheye', 'hold', 0, "5.0",
    [
      [0, 0],
      ["3.0", 1],
    ],
  ],

  ['camera.fov', 'hold', "3.0", "5.0",
    [
      ["3.0", 85],
    ],
  ],

  ['fade.opacity', 'track', 0, "5.0",
    [
      [0, 0],
      [1, 0],
      ["0.4", 1],
      ["3.0", 1],
      ["3.0", 0],
    ],
  ],

  ['fade.preset', 'hold', 0, "5.0",
    [
      [0, 0],
      ["3.0", 1],
    ],
  ],

  // Fish eye pan
  ['camera.position', 'track', "3.0", "5.0",
    [
      ["2.3.1",     [1.55047484169708475, -0.5355849084681927, -0.069147921537957905]],
      ["2.4",     [0.71047484169708475, -0.4555849084681927, 0.049147921537957905]],
      ["2.5",     [-0.15447366671182536, -0.37383614798220377, 0.13688942973888563]],
      ["3.1.4",     [-0.5313025507838989, -0.4639884821153288, 0.34800568123618464]],
      ["3.3.1",     [-0.27836790092071406, -0.2343549585090215, 0.4472347320856249]],
      ["3.4.1",     [0.07529492926188235, -0.302457043129571, 0.2866505415552498]],
      ["3.5.1", [0.019113724018317783, -0.40247034503629786, -0.0058684487031491015]],
      ["4.2.1", [-0.061614749691371797, -0.31834039243967077, -0.5697357333381994]],
      ["4.3.1", [-0.061614749691371797, -0.31834039243967077, -0.5697357333381994]],
      ["5.3", [-0.061614749691371797, -0.31834039243967077, -0.5697357333381994]],
    ],
  ],

  ['camera.lookAt', 'track', "3.0", "5.0",
    [
      ["2.3",      [-5.536202835276499, -8.513635096942571, 2.212607547112093]  ],
      ["2.4",      [-4.536202835276499, -8.813635096942571, 2.912607547112093]  ],
      ["2.5",      [-3.5840813783527476, -9.143474647374061, 3.627823513528517]  ],
      ["3.1.4",      [2.180919940336029, -0.4582631039181119, 2.5357504677124907]  ],
      ["3.3.1",      [0.572805115476396, 2.31942570174969, -4.950870017986649]], 
      ["3.4.1",      [0.177037268258772, 3.5385052583907015, -8.417009815083167]  ],
      ["3.5.1", [-5.874616108789814, 3.4540438524292436, -7.081528910183577]],
      ["4.2.1", [-3.2776361053723093, 5.357330835241055, 6.931146419274574]],
      ["4.3.1", [-3.860238980840257, 3.4960122899777377, 7.7889947010212905]],
      ["5.3", [-10.776738371894177, 2.9164527618643095, 6.0305404021310745]],
    ],
  ],

  // Party on
  ['visualizer.preset', 'hold', "5.0", "9.1",
    [
      ["5.0", 2],
      ["7.0", 10],
      ["9.0", 2],
    ],
  ],
  ['fade.preset', 'hold', "5.0", "7.0",
    [
      ["5.0", 1],
    ],
  ],
  ['camera.fisheye', 'hold', "5.0", "7.0",
    [
      ["5.0", 0],
    ],
  ],
  ['camera.fov', 'hold', "5.0", "7.0",
    [
      ["5.0", 70],
    ],
  ],
  ['fade.opacity', 'hold', "5.0", "7.0",
    [
      ["5.0", 1],
    ],
  ],
  ['camera.position', 'track', "5.0", "9.0",
    [
      ["5.0", [-0.13555384261711861, -0.7065839168251184, -1.087856797892254]],
      ["5.2", [0.1552442596390322, -0.6376522069085491, -0.6118159021555052]],
      ["6.0", [0.6972904943436452, -0.4049431736924811, 0.7996237516090074]],
      ["6.2", [0.047232511579491, -0.35941273853748907, 1.4224763726546008]],
      ["7.0", [0.2367491023422697, -0.3589343062913386, 0.5915399719958025]],
      ["7.2", [1.0115384452199775, -0.22407799508863675, 0.09738182114350019]],
      ["8.0", [0.7407565367937692, -0.29841462149742143, -0.12916320169695178]],
      ["8.2", [-0.8608938156410669, -0.23186574657945377, -0.3200418135639403]],
      ["9.0.2", [-1.0131467447944347, -0.13771314467086002, 0.45914085348212286]],

    ],
  ],

  ['camera.lookAt', 'track', "5.0", "9.0",
    [
      ["5.0", [4.573407985445686, 3.510321621138108, 5.333652610159228]],
      ["5.2", [0.44341362947617063, 6.800309329948349, 5.933799037693454]],
      ["6.0", [-6.430935072479459, 5.228395473076772, -3.1043972457031823]],
      ["6.2", [0.012940019034511169, 8.9011876944109, -3.2403248932084763]],
      ["7.0", [4.0457627157244564, 3.0161853526426184, -8.60463325424394]],
      ["7.2", [2.481505378130782, 6.8367140631094045, -6.448902279362736]],
      ["8.0", [-7.617132757184539, 4.204117129575182, 2.749210878203311]],
      ["8.2", [8.203754429337915, 0.9418545792730586, 3.499111592309645]],
      ["9.0.2", [2.382934087059084, 9.216984166903188, 0.5095577340725571]],
    ],
  ],

  // Go to space
  ['aurora.bend', 'hold', 0, "11.0",
    [
      [0, 0],
      ["9.0", 16],
    ],
  ],
  ['land.visible', 'hold', 0, "11.0",
    [
      [0, true],
      ["9.0", false],
    ],
  ],
  ['earth.visible', 'hold', 0, "11.0",
    [
      [0, true],
      [0.1, false],
      ["9.0", true],
    ],
  ],
  ['camera.fov', 'hold', "9.0", "11.0",
    [
      ["5.0", 65],
    ],
  ],
  ['fade.opacity', 'hold', "9.0", "11.0",
    [
      ["9.0", 1],
    ],
  ],
  ['camera.position', 'track', "9.0", "11.0",
    [
      ["8.3", [-24.630378296705164, 29.649871912458682, 16.68837799301888]],
      ["9.2", [11.377685493239174, 29.64987191004947, 31.78200185907081]],
      ["10.1", [36.03134072591222, 29.64987186411932, 2.5397407143651556]],
      ["11.0.1", [6.34834324845675, 22.777278171600592, -17.321791172014475]],


    ],
  ],

  ['camera.lookAt', 'track', "9.0", "11.0",
    [
      ["8.3", [-20.12530245196494, 28.13220698566893, 12.757999614215045]],
      ["9.2", [11.214651618793061, 27.609234820648204, 26.401484932131957]],
      ["10.0.2", [30.446502573052406, 25.703481723241808, 2.262401518598243]],
      ["11.0.1", [11.29137067327062, 21.52521972863692, -10.748545485436878]],
    ],
  ],

  // Fish eye cut
  ['camera.fisheye', 'hold', "11.0", "18.0",
    [
      ["11.0", 1],
    ],
  ],

  ['camera.fov', 'hold', "11.0", "18.0",
    [
      ["11.0", 85],
    ],
  ],

  ['fade.opacity', 'hold', "11.0", "18.0",
    [
      ["11.0", 0],
    ],
  ],

  ['fade.preset', 'hold', "11.0", "18.0",
    [
      ["11.0", 1],
    ],
  ],

  ['aurora.bend', 'hold', "11.0", "18.0",
    [
      ["11.0", 0],
    ],
  ],
  ['land.visible', 'hold', "11.0", "18.0",
    [
      ["11.0", true],
    ],
  ],
  ['earth.visible', 'hold', "11.0", "18.0",
    [
      ["11.0", false],
    ],
  ],
  ['visualizer.preset', 'hold', "11.0", "18.0",
    [
      ["11.0.0.0", 5],
      ["11.0.0.1", 4],
      ["11.0.0.2", 6],
      ["11.0.0.3", 9],
      ["11.0.2.0", 4],
      ["11.0.2.1", 6],
      ["11.0.2.2", 9],
      ["11.0.2.3", 5],
      ["11.1", 9],
      ["11.2", 7],
      ["11.3", 4],
      ["12.0.0.0", 5],
      ["12.0.0.1", 9],
      ["12.1", 6],
      ["12.2", 8],
      ["13.0", 3],
      ["14.0", 1],
    ],
  ],

  ['camera.position', 'track', "11.0", "18.0",
    [
      ["11.0", [0.22877115469755216, -0.8358592503872685, -0.09561843481009263]],
      ["11.2", [0.29334717417515693, -0.8049265697729026, -0.05515654672110439]],
      ["12.0", [0.6164249021518393, -0.7688392834678538, 0.1363423520922739]],
      ["12.2", [0.6791442765761715, -0.6771106253905629, 0.3385280005756838]],
      ["13.0", [0.7143011009599415, -0.654044822475607, 0.8477748671095305]],
      ["14.0", [-0.07396285183171494, -0.22709932720897516, -0.002764228888775984]],
      ["15.0", [-0.07396285183171492, -0.22709932720897513, -0.0027642288887761435]],
      ["16.0", [-0.3805855865509838, -0.22709933279200106, -0.2815721059853441]],
      ["17.0", [-0.48058558655098373, -0.22709933279200106, -0.381572105985344]],
      ["17.3", [-0.52058558655098373, -0.22709933279200106, -0.421572105985344]],
      ["18.1", [-0.58058558655098373, -0.22709933279200106, -0.481572105985344]],

     ],
  ],

  ['camera.lookAt', 'track', "11.0", "18.0",
    [
      ["11.0", [6.881095701662378, 4.238669455804162, -5.531438676500018]],
      ["11.2", [7.634340371588685, 4.555124152343229, 4.055167690063345]],
      ["12.0", [4.0517809909896165, 8.189228887355883, 2.7934018501306173]],
      ["12.2", [-6.4648716489543805, 2.7678730637437625, 6.343062182379348]],
      ["13.0", [-2.9176287663368363, 6.869457280217761, -4.424090412211764]],
      ["14.0", [-3.563088399965438, 8.768605352973978, -2.56150878901839]],
      ["15.0", [-6.426400302731248, 6.720557474797793, 3.3367857192732036]],
      ["16.0", [1.9454939946167644, 8.727141679453188, 3.4084964131807514]],
      ["17.0", [6.170441839623667, 7.272222331138417, -0.3643785169468843]],
      ["17.3", [8.170441839623667, 6.272222331138417, -1.3643785169468843]],
      ["18.1", [6.170441839623667, 10.272222331138417, -1.3643785169468843]],
    ],
  ],

  // Go to space
  ['aurora.bend', 'hold', "18.0", 0,
    [
      ["18.0", 16],
    ],
  ],
  ['land.visible', 'hold', "18.0", 0,
    [
      ["18.0", false],
    ],
  ],
  ['earth.visible', 'hold', "18.0", 0,
    [
      ["18.0", true],
    ],
  ],
  ['camera.fisheye', 'hold', "18.0", 0,
    [
      ["18.0", 0],
    ],
  ],
  ['camera.fov', 'hold', "18.0", 0,
    [
      ["18.0", 70],
    ],
  ],
  ['fade.opacity', 'hold', "18.0", 0,
    [
      ["18.0", 1],
    ],
  ],
  ['camera.position', 'track', "18.0", "20.0",
    [
      ["18.0", [-23.097517893357693, 58.973656486395015, 19.728866657046165]],
      ["19.0", [4.639995761068621, 43.025294438741554, 24.26076992343253]],
      ["20.0.2", [62.866342049942915, 48.72104286178207, -7.716070442758493]],
    ],
  ],

  ['camera.lookAt', 'track', "18.0", "20.0",
    [
      ["18.0", [-13.140269011174773, 45.52611922692916, 18.957031552986507]],
      ["19.0", [6.362235984021529, 29.58146349888866, 10.489207745894348]],
      ["20.0.2", [11.47179061182717, 37.269630084983625, -7.481437421084184]],
    ],
  ],

  ['visualizer.preset', 'hold', "18.0", "23.0",
    [
      ["18.0", 6],
      ["18.0.1.1", 8],
      ["18.0.1.2", 6],
      ["18.0.1.3", 2],
      ["18.1", 10],
      ["18.1.2.1", 7],
      ["18.1.2.2", 9],
      ["18.1.2.3", 5],
      ["18.2", 2],
      ["18.3", 6],
      ["19.0.0.0", 9],
      ["19.0.0.1", 6],
      ["19.0.0.2", 2],
      ["19.1", 9],
      ["19.3", 1],
      ["20.0", 11],
      ["20.0.0.1", 2]
      ["22.0", 1],
    ],
  ],

  // Earth orbit
  ['camera.position', 'hold', '20.0', 0,
    [
      ["20.0", [7, 40.72104286178207, 62.71607044275849]],
    ]
  ],
  ['camera.lookAt', 'hold', '20.0', 0,
    [
      ["20.0", [0, 20.71051599827255, 0]],
    ]
  ],
  ['sky.space', 'hold', '20.0', 0,
    [
      ["20.0", 1],
    ],
  ],
  ['camera.orbit', 'track', '20.0', 0,
    [
      ['19.0', -6],
      ['20.0', 0],
      ['21.0', 6],
      ['21.3', 12],
      ['22.2', 18],
      [316.16413 + 3, 6.28*4],
    ],
  ],

  // Message
  ['text.visible', 'hold', 0, 0,
    [
      [0, true],
      [0.1, false],
      ["22.3.0", true],
    ],
  ],

  // Fade
  ['fade.preset', 'hold', "23.0", 0,
    [
      [316.16413, 0],
    ],
  ],
  ['fade.opacity', 'track', "23.0", 0,
    [
      [316.16413 + 4, 1],
      [316.16413 + 10, 0],
    ],
  ],

];

window.demo && window.demo.exports.director.live(Acko.Demo.Script);
