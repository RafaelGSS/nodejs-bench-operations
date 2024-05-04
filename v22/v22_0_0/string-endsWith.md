## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|125,249,594|82|
|(short string) (true) String#slice and strict comparison|145,420,958|83|
|(long string) (true) String#endsWith|93,995,785|92|
|(long string) (true) String#slice and strict comparison|147,584,357|84|
|(short string) (false) String#endsWith|136,173,563|82|
|(short string) (false) String#slice and strict comparison|142,428,602|79|
|(long string) (false) String#endsWith|132,930,083|79|
|(long string) (false) String#slice and strict comparison|145,523,676|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:30:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":125249594.2725666,"samples":5},{"name":"(short string) (true) String#slice and strict comparison","opsSec":145420957.61064738,"samples":8},{"name":"(long string) (true) String#endsWith","opsSec":93995784.97471847,"samples":4},{"name":"(long string) (true) String#slice and strict comparison","opsSec":147584357.26427084,"samples":5},{"name":"(short string) (false) String#endsWith","opsSec":136173562.6807902,"samples":6},{"name":"(short string) (false) String#slice and strict comparison","opsSec":142428602.19975084,"samples":4},{"name":"(long string) (false) String#endsWith","opsSec":132930082.95972565,"samples":5},{"name":"(long string) (false) String#slice and strict comparison","opsSec":145523675.9873987,"samples":5}]}-->
