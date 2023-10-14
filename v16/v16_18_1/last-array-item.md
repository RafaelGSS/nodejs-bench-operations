## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|12,655,614|91|
|Length = 10_000 - Array.at|13,153,523|94|
|Length = 1_000_000 - Array.at|13,038,309|97|
|Length = 100 - Array[length - 1]|588,020,481|98|
|Length = 10_000 - Array[length - 1]|585,443,909|94|
|Length = 1_000_000 - Array[length - 1]|583,003,686|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:05:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Length = 100 - Array.at","hz":12655613.990883168,"cycles":6,"stats":{"deviation":1.0433462533812048e-8,"mean":7.901631645215937e-8,"moe":2.1436991514654775e-9,"rme":2.712982897353087,"sem":1.0937240568701416e-9,"variance":1.0885714044445973e-16}},{"name":"Length = 10_000 - Array.at","hz":13153522.935180511,"cycles":7,"stats":{"deviation":7.296685969462664e-10,"mean":7.602525991918047e-8,"moe":1.4750875594917176e-10,"rme":0.19402598045173755,"sem":7.525956936182233e-11,"variance":5.324162613695329e-19}},{"name":"Length = 1_000_000 - Array.at","hz":13038309.056066034,"cycles":5,"stats":{"deviation":2.448628304026769e-9,"mean":7.669706214969287e-8,"moe":4.872962502329187e-10,"rme":0.6353519112398884,"sem":2.4862053583312176e-10,"variance":5.995780571281011e-18}},{"name":"Length = 100 - Array[length - 1]","hz":588020481.379092,"cycles":7,"stats":{"deviation":1.5626947417474007e-11,"mean":1.7006210356052346e-9,"moe":3.0939777366796134e-12,"rme":0.181932227809854,"sem":1.5785600697344967e-12,"variance":2.442014855884975e-22}},{"name":"Length = 10_000 - Array[length - 1]","hz":585443908.7469296,"cycles":10,"stats":{"deviation":2.924561474584623e-11,"mean":1.7081055675177771e-9,"moe":5.91225148811799e-12,"rme":0.34612916206986477,"sem":3.016454840876526e-12,"variance":8.553059818624583e-22}},{"name":"Length = 1_000_000 - Array[length - 1]","hz":583003686.3132254,"cycles":8,"stats":{"deviation":5.4713458621615603e-11,"mean":1.7152550206393354e-9,"moe":1.1002425526242951e-11,"rme":0.6414454640186369,"sem":5.613482411348445e-12,"variance":2.9935625543392428e-21}}]}-->
