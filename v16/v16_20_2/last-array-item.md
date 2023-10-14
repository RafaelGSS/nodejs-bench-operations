## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,643,133|97|
|Length = 10_000 - Array.at|15,628,286|94|
|Length = 1_000_000 - Array.at|15,644,300|94|
|Length = 100 - Array[length - 1]|710,612,790|99|
|Length = 10_000 - Array[length - 1]|709,471,294|95|
|Length = 1_000_000 - Array[length - 1]|709,301,525|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:05:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Length = 100 - Array.at","hz":15643132.711286897,"cycles":5,"stats":{"deviation":1.333202206794082e-9,"mean":6.39258145063537e-8,"moe":2.653177026111457e-10,"rme":0.41504000325999024,"sem":1.3536617480160496e-10,"variance":1.7774281242006102e-18}},{"name":"Length = 10_000 - Array.at","hz":15628286.123771956,"cycles":5,"stats":{"deviation":8.057810349125894e-10,"mean":6.398654286722552e-8,"moe":1.6289553713128365e-10,"rme":0.25457780625732196,"sem":8.310996792412432e-11,"variance":6.4928307622480355e-19}},{"name":"Length = 1_000_000 - Array.at","hz":15644300.446870508,"cycles":6,"stats":{"deviation":4.2485676453251095e-10,"mean":6.392104289968686e-8,"moe":8.588843353689782e-11,"rme":0.13436644591622984,"sem":4.3820629355560114e-11,"variance":1.8050327036903347e-19}},{"name":"Length = 100 - Array[length - 1]","hz":710612790.3921739,"cycles":6,"stats":{"deviation":8.562936760442824e-12,"mean":1.4072361397380966e-9,"moe":1.6867907497679772e-12,"rme":0.11986550815003295,"sem":8.606075253918251e-13,"variance":7.332388596334305e-23}},{"name":"Length = 10_000 - Array[length - 1]","hz":709471293.9606862,"cycles":6,"stats":{"deviation":9.311874083627773e-12,"mean":1.4095002976334837e-9,"moe":1.872541120520396e-12,"rme":0.13285141717701987,"sem":9.553781227144877e-13,"variance":8.671099894933857e-23}},{"name":"Length = 1_000_000 - Array[length - 1]","hz":709301524.6814475,"cycles":8,"stats":{"deviation":9.888193375309008e-12,"mean":1.4098376574745236e-9,"moe":1.9478496202891113e-12,"rme":0.13816127055212454,"sem":9.93800826678118e-13,"variance":9.777636822750494e-23}}]}-->
