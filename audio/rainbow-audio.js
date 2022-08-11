()=>a.fft[0]
a.show()

osc(10,0.1,2)
  .modulateKaleid(osc(1).kaleid(100),()=>a.fft[0])
  .out(o0)
