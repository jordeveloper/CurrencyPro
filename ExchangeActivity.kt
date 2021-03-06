package com.repoai.currencypro

import android.annotation.SuppressLint
import android.content.Intent
import android.os.Bundle
import android.util.Log.e
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.backendless.Backendless
import com.backendless.async.callback.AsyncCallback
import com.backendless.exceptions.BackendlessFault
import com.repoai.currencypro.R.drawable.*
import kotlinx.android.synthetic.main.activity_exchange.*
import java.math.BigDecimal
import java.math.MathContext


class ExchangeActivity : AppCompatActivity() {

    lateinit var rateForSP: String
    var resultForSP: String = ""
    var exchangeCoin:String = "Israel"
    var getCoin:String = "₪"


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_exchange)

        var flagImage = intent.getStringExtra("CURRENCYCODE")!!
        e("currCode", flagImage, null)

        var countryName = intent.getStringExtra("COUNTRY")!!
        country2.text = countryName.toString()


        //var unit = intent.getStringExtra("UNIT").toDouble()

        getFlag(flagImage)
        setPointer()


        btnSendShare()


    }

    private fun btnSendShare() {

        btn_share.setOnClickListener {
            var tempResult = resultForSP
            if (tempResult == ""){
                tempResult = 1.toString()
            }
            try
            {
                val message: String = "From:${country1.text}&nbsp;To:${country2.text}&nbsp;\nrate:${rateForSP}\nresult:${tempResult}"
                var intent = Intent()
                intent.action = (Intent.ACTION_SEND)
                intent.putExtra(Intent.EXTRA_TEXT, message)
                intent.type = "text/plain"
                intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
                startActivity(Intent.createChooser(intent,"Please select app"))

            }
            catch(e:Exception)
            {
                e("", "RunTimeException: ${e}",null)
            }
        }
    }

    @SuppressLint("WrongViewCast")
    private fun setPointer() {

        //var unit = intent.getDoubleExtra("UNIT",1.0)
        var setNum = findViewById<EditText>(R.id.setNum)


        var rate = intent.getDoubleExtra("RATE", 1.0)
        setNum.setText(rate.toString())
        rateForSP = rate.toString()
        e("rate", rate.toString(), null)
        var getNum = findViewById<TextView>(R.id.getNum) as TextView
        e("getNum", getNum.toString(), null)
        getNum.setText("1")
        
        btnClose.setOnClickListener {
            finish()
        }

        btn_save.setOnClickListener {
            if(CurrencySingleton.guest.equals(null) || CurrencySingleton.guest.equals("")) {
                saveNewContact()
            }
            else{
                Toast.makeText(applicationContext,"Only registered user can save",Toast.LENGTH_SHORT).show()
            }
        }

        btn_exchange.setOnClickListener {

            if(exchangeCoin.equals("Israel")){
                var setNum = findViewById<EditText>(R.id.setNum)

                var unit = setNum.text.toString().toDouble()

                val result = unit / rate
                e("result", result.toString(), null)
                //reducing the number to 5 digits
                var dc = BigDecimal(result)
                dc = dc.round(MathContext(5))

                val roundedResult: Double = dc.toDouble()

                resultForSP = roundedResult.toString()
                getNum.setText(roundedResult.toString())


            }
            else{

                var setNum = findViewById<EditText>(R.id.setNum)

                var unit = setNum.text.toString().toDouble()

                var rateForUnit: Double = 1.0

                var tempRate = rateForUnit / rate

                val result = unit / tempRate
                e("result", result.toString(), null)
                //reducing the number to 5 digits
                var dc = BigDecimal(result)
                dc = dc.round(MathContext(5))

                val roundedResult: Double = dc.toDouble()

                resultForSP = roundedResult.toString()
                getNum.setText(roundedResult.toString())

            }
        }

        btn_changeContentFab.setOnClickListener {

            changePositionFlag()

            var setNum = findViewById<EditText>(R.id.setNum)
            var setNumTemp = setNum.text

            var getNum = findViewById<TextView>(R.id.getNum)
            var getNumTemp = getNum.text.toString()



            setNum.setText(getNumTemp)
            getNum.setText(setNumTemp)



        }
    }


    private fun changePositionFlag() {
        //changing the flag and country name positions
        var tempFromCurrImage= fromCurImage.drawable
        var tempTocurrImage= toCurrImage.drawable
        changeCoinIcon()
        fromCurImage.setImageDrawable(tempTocurrImage)
        toCurrImage.setImageDrawable(tempFromCurrImage)

        var country1 = findViewById<TextView>(R.id.country1)
        var country2 = findViewById<TextView>(R.id.country2)

        var tempC1= country1.text.toString()
        var tempC2= country2.text.toString()

        country1.setText(tempC2)
        country2.setText(tempC1)

        if(country1.text.equals("Israel")){
            exchangeCoin = "Israel"
            Coin_symbole.setText("₪")
        }
        else {
            exchangeCoin = tempC2.toString()
            Coin_symbole.setText(getCoin)
        }

        e("EXE", exchangeCoin, null)

    }

    private fun changeCoinIcon() {

    }

    private fun saveNewContact() {
        e("save","GOT INSIDE",null)
        val thread = Thread(Runnable {
            try { //Your code goes here
                val saved_exchange = HashMap<Any, Any>()
                saved_exchange["unit"] = setNum.text.toString()
                saved_exchange["result"] = resultForSP.toFloat().toString()
                saved_exchange["createdDate"] = CurrencySingleton.currLastUpdate

                // save object asynchronously
                Backendless.Persistence.of("saved_exchange")
                    .save(saved_exchange, object : AsyncCallback<Map<*, *>?> {
                        override fun handleResponse(response: Map<*, *>?) {
                            Toast.makeText(applicationContext,"data saved successfully",Toast.LENGTH_SHORT).show()
                        }

                        override fun handleFault(fault: BackendlessFault) {
                            Toast.makeText(applicationContext,fault.message,Toast.LENGTH_SHORT).show()
                        }
            })

            } catch (e: Exception) {
                e.printStackTrace()
            }
        })

        thread.start()

    }


    private fun getFlag(flagImage: String?) {

            when (flagImage) {
                "USD" -> {
                    toCurrImage.setImageResource(icons8_usa_50)
                     getCoin="$"

                }
                "GBP" -> {
                    toCurrImage.setImageResource(icons8_great_britain_50)
                    getCoin="£"
                }
                "JPY" -> {
                    toCurrImage.setImageResource(icons8_japan_50)
                    getCoin="¥"
                }
                "EUR" -> {
                    toCurrImage.setImageResource(icons8_flag_of_europe_50)
                    getCoin="€"
                }
                "AUD" -> {
                    toCurrImage.setImageResource(icons8_australia_50)
                    getCoin="$"
                }
                "CAD" -> {
                    toCurrImage.setImageResource(icons8_canada_48)
                    getCoin="C$"
                }
                "DKK" -> {
                    toCurrImage.setImageResource(icons8_denmark_50)
                    getCoin="kr"
                }
                "NOK" -> {
                    toCurrImage.setImageResource(icons8_norway_50)
                    getCoin="kr"
                }
                "ZAR" -> {
                    toCurrImage.setImageResource(icons8_south_africa_50)
                    getCoin="R"
                }
                "SEK" -> {
                    toCurrImage.setImageResource(icons8_sweden_50)
                    getCoin="kr"
                }
                "CHF" -> {
                    toCurrImage.setImageResource(icons8_switzerland_50)
                    getCoin="CHF"
                }
                "JOD" -> {
                    toCurrImage.setImageResource(icons8_jordan_50)
                    getCoin="JOD"
                }
                "LBP" -> {
                    toCurrImage.setImageResource(icons8_lebanon_50)
                    getCoin="ل.ل"
                }
                "EGP" -> {
                    toCurrImage.setImageResource(icons8_egypt_50)
                    getCoin="ج.م"
                }
            }
        }
    }