## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|16,513,781|8256891|
|(short string) (true) String#slice and strict comparison|20,304,765|10152383|
|(long string) (true) String#startsWith|15,331,436|7665719|
|(long string) (true) String#slice and strict comparison|20,450,610|10225306|
|(short string) (false) String#startsWith|16,088,043|8044022|
|(short string) (false) String#slice and strict comparison|20,787,652|10393827|
|(long string) (false) String#startsWith|16,004,928|8002465|
|(long string) (false) String#slice and strict comparison|20,713,507|10356754|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:28:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":16513781.133817708,"samples":8256891},{"name":"(short string) (true) String#slice and strict comparison","opsSec":20304765.302891206,"samples":10152383},{"name":"(long string) (true) String#startsWith","opsSec":15331436.691402834,"samples":7665719},{"name":"(long string) (true) String#slice and strict comparison","opsSec":20450610.225206822,"samples":10225306},{"name":"(short string) (false) String#startsWith","opsSec":16088043.102448918,"samples":8044022},{"name":"(short string) (false) String#slice and strict comparison","opsSec":20787652.998855136,"samples":10393827},{"name":"(long string) (false) String#startsWith","opsSec":16004928.534705028,"samples":8002465},{"name":"(long string) (false) String#slice and strict comparison","opsSec":20713507.367873922,"samples":10356754}]}-->
