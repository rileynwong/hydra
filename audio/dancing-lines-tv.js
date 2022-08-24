a.setBins(8)
osc(60, 0.1, () => a.fft[7] * 6)
	.modulate(noise(3), () => a.fft[0])
	.modulateScrollY(osc(0.2), 1,1)

	.out(o0)