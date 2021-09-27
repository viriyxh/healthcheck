import { useEffect } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import useTranslation from "next-translate/useTranslation"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Container from "../components/Container"
import Layout from "../components/Layout"
import Card from "../components/Card"
import Form from "../components/Form"
import Input from "../components/Input"
import InputRadio from "../components/InputRadio"
import Button from "../components/Button"
import ChoiceList from "../components/ChoiceList"
import ChoiceSelectWrapper from "../components/ChoiceSelectWrapper"
import ChoiceSelect from "../components/ChoiceSelect"

const App = ({ page, updatePage, formData, updateFormData }) => {
  const router = useRouter()

  let { t } = useTranslation("common")

  console.log(formData)

  switch (page) {
    // Personal Data Form
    case 1:
      document.querySelector("body").style.backgroundColor =
        "var(--color-white)"

      return (
        <Container>
          <Header />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-pink)">
                <Form>
                  <div>
                    <Input
                      label={t("name")}
                      type="text"
                      id="name"
                      color="var(--color-pink)"
                      onChangeHandler={(value) => {
                        updateFormData({ name: value })
                      }}
                    />
                    <InputRadio
                      label={t("sex")}
                      items={[
                        { id: "sex_opt1", label: t("sex_male"), value: "male" },
                        {
                          id: "sex_opt2",
                          label: t("sex_female"),
                          value: "female",
                        },
                      ]}
                      name="sex"
                      onChangeHandler={(value) => {
                        updateFormData({ sex: value })
                      }}
                    />
                    <Input
                      label={t("age")}
                      type="number"
                      id="age"
                      color="var(--color-pink)"
                      onChangeHandler={(value) => {
                        updateFormData({ age: value })
                      }}
                    />
                    <InputRadio
                      label={t("congenital")}
                      items={[
                        {
                          id: "congenital1",
                          label: t("congenital_opt1"),
                          value: "โรคอ้วนลงพุง",
                        },
                        {
                          id: "congenital2",
                          label: t("congenital_opt2"),
                          value: "โรคเครียด",
                        },
                        {
                          id: "congenital3",
                          label: t("congenital_opt3"),
                          value: "โรคความดัน",
                        },
                        {
                          id: "congenital4",
                          label: t("congenital_opt4"),
                          value: "โรคเบาหวาน",
                        },
                        {
                          id: "congenital5",
                          label: t("congenital_opt5"),
                          value: "โรคหลอดเลือดสมองและหัวใจ",
                        },
                      ]}
                      name="congenital"
                      onChangeHandler={(value) => {
                        updateFormData({ congenital: value })
                      }}
                    />
                    <Input
                      label={t("exercise")}
                      type="text"
                      id="exercise"
                      color="var(--color-pink)"
                      onChangeHandler={(value) => {
                        updateFormData({ exercise: value })
                      }}
                    />
                    <InputRadio
                      label=""
                      items={[
                        {
                          id: "symptom1",
                          label: t("smoking"),
                          value: "สูบบุหรี่",
                        },
                        {
                          id: "symptom2",
                          label: t("alcohol_abuse"),
                          value: "ดื่มสุรา",
                        },
                      ]}
                      name="symptom"
                      onChangeHandler={(value) => {
                        updateFormData({ symptom: value })
                      }}
                    />
                  </div>
                </Form>
              </Card>
              <Button
                color="var(--color-pink)"
                onClick={() => {
                  updatePage(page + 1)
                }}
                message={t("save")}
              />
            </div>
          </Layout>
          <Footer />
        </Container>
      )
    // Information
    case 2:
      document.querySelector("body").style.backgroundColor =
        "var(--color-white)"

      return (
        <Container>
          <Header />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-dark-blue)">
                <Form>
                  <div className="text-center">
                    <h1 style={{ color: "var(--color-dark-blue)" }}>
                      HEALTH CHECK UP
                    </h1>
                    <p>
                      สำรวจสุขภาวะเบื้องต้นของคุณ
                      <br />“<br />
                      ร่างกายของแต่ละคน
                      <br />
                      มีความเฉพาะไม่เหมือนกัน
                      <br />
                      ยิ่งเราเข้าใจร่างกายเท่าไร
                      <br />
                      เราก็จะดูแลมันได้ดี
                      <br />”<br />
                      15 นาที กับการ Check up สุขภาวะของคุณ กับ 3 Check list
                    </p>
                  </div>
                </Form>
              </Card>
              <Button
                color="var(--color-dark-blue)"
                onClick={() => updatePage(page + 1)}
                message={t("next")}
              />
            </div>
          </Layout>
          <Footer />
        </Container>
      )
    // Direction
    case 3:
      document.querySelector("body").style.backgroundColor =
        "var(--color-white)"

      return (
        <Container>
          <Header />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-dark-blue)">
                <Form>
                  <div className="text-center">
                    <h1 style={{ color: "var(--color-dark-blue)" }}>HCU MAP</h1>
                    <p>
                      ดูสัญลักษณ์ Check point บนพื้น
                      <br />
                      ตอนนี้คุณอยู่บนพื้นวงกลมสีน้ำเงินหรือไม่?
                    </p>
                    <div className="position-relative">
                      <Image
                        src="/embify.png"
                        alt=""
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                </Form>
              </Card>
              <Button
                color="var(--color-dark-blue)"
                onClick={() => updatePage(page + 1)}
                message={t("success")}
              />
            </div>
          </Layout>
          <Footer />
        </Container>
      )
    // 3อ. (All section have not been checked.)
    case 4:
      document.querySelector("body").style.backgroundColor =
        "var(--color-white)"

      return (
        <Container>
          <Header />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-dark-blue)">
                <Form>
                  <div className="text-center">
                    <h1 style={{ color: "var(--color-dark-blue)" }}>
                      HEALTH (สุขภาวะ)
                    </h1>
                    <p>องค์ประกอบของสุขภาพที่ดี ยึดหลัก 3อ. คือ</p>
                    <div className="position-relative">
                      <Image
                        src="/embify.png"
                        alt=""
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                </Form>
              </Card>
              <Button
                color="var(--color-dark-blue)"
                onClick={() => updatePage(page + 1)}
                message={t("next")}
              />
            </div>
          </Layout>
          <Footer />
        </Container>
      )
    // Section 1 Direction
    case 5:
      document.querySelector("body").style.backgroundColor =
        "var(--color-dark-green)"

      return (
        <Container>
          <Header variant="light" />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-dark-blue)">
                <Form>
                  <div className="text-center">
                    <h1 style={{ color: "var(--color-dark-blue)" }}>HCU MAP</h1>
                    <p>
                      ดูสัญลักษณ์ Check point บนพื้น
                      <br />
                      ตอนนี้คุณอยู่ที่สัญลักษณ์สีเขียวเข้มหรือไม่?
                    </p>
                    <div className="position-relative">
                      <Image
                        src="/embify.png"
                        alt=""
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                </Form>
              </Card>
              <Button
                color="var(--color-dark-blue)"
                onClick={() => updatePage(page + 1)}
                message={t("success")}
              />
            </div>
          </Layout>
          <Footer variant="light" />
        </Container>
      )
    // 5-Minute Body Test Direction
    case 6:
      document.querySelector("body").style.backgroundColor =
        "var(--color-dark-green)"

      return (
        <Container>
          <Header variant="light" />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-dark-blue)">
                <Form>
                  <div className="text-center">
                    <h1 style={{ color: "var(--color-dark-green)" }}>
                      ทดสอบร่างกายผ่านเครื่องเล่น 5-Minute Body Test
                    </h1>
                    <div className="position-relative">
                      <Image
                        src="/embify.png"
                        alt=""
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                </Form>
              </Card>
              <Button
                color="var(--color-dark-blue)"
                onClick={() => updatePage(page + 1)}
                message={t("next")}
              />
            </div>
          </Layout>
          <Footer variant="light" />
        </Container>
      )
    // 5-Minute Body Test Form
    case 7:
      document.querySelector("body").style.backgroundColor =
        "var(--color-dark-green)"

      return (
        <Container>
          <Header variant="light" />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-dark-blue)">
                <Form>
                  <div>
                    <h1
                      className="text-center"
                      style={{ color: "var(--color-dark-green)" }}
                    >
                      ข้อมูลที่ได้
                    </h1>
                    <div>
                      <Input
                        label="สมรรถภาพหัวใจและหลอดเลือด"
                        type="number"
                        id="opt1"
                        color="var(--color-dark-green)"
                        onChangeHandler={(value) => {
                          updateFormData({ section1_opt1: value })
                        }}
                      />
                      <Input
                        label="สมรรถภาพกล้ามเนื้อ"
                        type="number"
                        id="opt2"
                        color="var(--color-dark-green)"
                        onChangeHandler={(value) => {
                          updateFormData({ section1_opt2: value })
                        }}
                      />
                      <InputRadio
                        label
                        items={[
                          {
                            id: "opt3",
                            label: "ความหย่อนตัว",
                            value: "pass",
                          },
                        ]}
                        name="opt3"
                        onChangeHandler={(value) => {
                          updateFormData({ section1_opt3: value })
                        }}
                      />
                      <InputRadio
                        label
                        items={[
                          { id: "opt4", label: "ความทรงตัว", value: "pass" },
                        ]}
                        name="opt4"
                        onChangeHandler={(value) => {
                          updateFormData({ section1_opt4: value })
                        }}
                      />
                      <InputRadio
                        label
                        items={[
                          {
                            id: "opt5",
                            label: "ประเมินท่าทาง",
                            value: "pass",
                          },
                        ]}
                        name="opt5"
                        onChangeHandler={(value) => {
                          updateFormData({ section1_opt5: value })
                        }}
                      />
                    </div>
                  </div>
                </Form>
              </Card>
              <Button
                color="var(--color-dark-blue)"
                onClick={() => updatePage(page + 1)}
                message={t("next")}
              />
            </div>
          </Layout>
          <Footer variant="light" />
        </Container>
      )
    // 5-Minute Body Test Form Result
    case 8:
      document.querySelector("body").style.backgroundColor =
        "var(--color-dark-green)"

      return (
        <Container>
          <Header variant="light" />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-dark-blue)">
                <Form>
                  <div
                    className="text-center"
                    style={{ color: "var(--color-dark-green)" }}
                  >
                    <h1 className="pb-4">ข้อมูลที่ได้</h1>
                    <h1>สุขภาพร่างกายของคุณแข็งแรงดี คุณออกกำลังกายสม่ำเสมอ</h1>
                  </div>
                </Form>
              </Card>
              <Button
                color="var(--color-dark-blue)"
                onClick={() => updatePage(page + 1)}
                message={t("next")}
              />
            </div>
          </Layout>
          <Footer variant="light" />
        </Container>
      )
    // Section 1 Direction
    case 9:
      document.querySelector("body").style.backgroundColor =
        "var(--color-dark-green)"

      return (
        <Container>
          <Header variant="light" />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-dark-blue)">
                <Form>
                  <div className="text-center">
                    <h1 style={{ color: "var(--color-dark-green)" }}>
                      อ่านข้อแนะนำ และข้อมูลเพิ่มเติมได้ที่บริเวณนี้
                    </h1>
                    <div className="position-relative">
                      <Image
                        src="/embify.png"
                        alt=""
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                </Form>
              </Card>
              <Button
                color="var(--color-dark-blue)"
                onClick={() => updatePage(page + 1)}
                message={t("done")}
              />
            </div>
          </Layout>
          <Footer variant="light" />
        </Container>
      )
    // 3อ. (Section 1 has been checked.)
    case 10:
      document.querySelector("body").style.backgroundColor =
        "var(--color-white)"

      return (
        <Container>
          <Header />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-dark-blue)">
                <Form>
                  <div className="text-center">
                    <h1 style={{ color: "var(--color-dark-blue)" }}>
                      HEALTH (สุขภาวะ)
                    </h1>
                    <p>องค์ประกอบของสุขภาพที่ดี ยึดหลัก 3อ. คือ</p>
                    <div className="position-relative">
                      <Image
                        src="/embify.png"
                        alt=""
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                </Form>
              </Card>
              <Button
                color="var(--color-dark-blue)"
                onClick={() => updatePage(page + 1)}
                message={t("next")}
              />
            </div>
          </Layout>
          <Footer />
        </Container>
      )
    // Section 2 Direction
    case 11:
      document.querySelector("body").style.backgroundColor =
        "var(--color-light-green)"

      return (
        <Container>
          <Header variant="light" />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-green)">
                <Form>
                  <div className="text-center">
                    <h1 style={{ color: "var(--color-green)" }}>HCU MAP</h1>
                    <p>
                      ดูสัญลักษณ์ Check point บนพื้น
                      ตอนนี้คุณอยู่ที่สัญลักษณ์สีเขียวอ่อนหรือไม่
                    </p>
                    <div className="position-relative">
                      <Image
                        src="/embify.png"
                        alt=""
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                </Form>
              </Card>
              <Button
                color="var(--color-green)"
                onClick={() => updatePage(page + 1)}
                message={t("success")}
              />
            </div>
          </Layout>
          <Footer variant="light" />
        </Container>
      )
    // Section 2 Questions
    case 12:
      document.querySelector("body").style.backgroundColor =
        "var(--color-light-green)"

      return (
        <Container>
          <Header variant="light" />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-green)">
                <Form>
                  <div className="text-center">
                    <h1
                      className="pb-4"
                      style={{ color: "var(--color-green)" }}
                    >
                      ทดสอบพฤติกรรมการกินอาหาร ผ่านการตอบคำถาม 15 ข้อ
                    </h1>
                    <p>ขอให้ตอบตามพฤติกรรมจริงของท่านในรอบ 3 เดือนที่ผ่านมา</p>
                  </div>
                </Form>
              </Card>
              <Button
                color="var(--color-green)"
                onClick={() => updatePage(page + 1)}
                message={t("next")}
              />
            </div>
          </Layout>
          <Footer variant="light" />
        </Container>
      )
    // Section 2 Question 1
    case 13:
      document.querySelector("body").style.backgroundColor =
        "var(--color-light-green)"

      return (
        <Container>
          <Header variant="light" />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-green)">
                <Form>
                  <ChoiceList
                    color="var(--color-white)"
                    bgColor="var(--color-green)"
                    list={1}
                    message="คุณมักจะเติมน้ำตาลเพิ่มลงในอาหาร"
                  />
                  <ChoiceSelectWrapper>
                    <ChoiceSelect
                      color="var(--color-green)"
                      onClick={() => {
                        updateFormData({ section2_q1: "ทำเป็นประจำ" })
                        updatePage(page + 1)
                      }}
                      message="ทำเป็นประจำ"
                    />
                    <ChoiceSelect
                      color="var(--color-green)"
                      onClick={() => {
                        updateFormData({ section2_q1: "ทำบ้าง เป็นบางครั้ง" })
                        updatePage(page + 1)
                      }}
                      message="ทำบ้าง เป็นบางครั้ง"
                    />
                    <ChoiceSelect
                      color="var(--color-green)"
                      onClick={() => {
                        updateFormData({ section2_q1: "แทบไม่ทำ/ไม่ทำเลย" })
                        updatePage(page + 1)
                      }}
                      message="แทบไม่ทำ/ไม่ทำเลย"
                    />
                  </ChoiceSelectWrapper>
                </Form>
              </Card>
            </div>
          </Layout>
          <Footer variant="light" />
        </Container>
      )
    // Section 2 Result
    case 14:
      document.querySelector("body").style.backgroundColor =
        "var(--color-light-green)"

      return (
        <Container>
          <Header variant="light" />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-green)">
                <Form>
                  <div className="text-center">
                    <h1 style={{ color: "var(--color-green)" }}>
                      พฤติกรรมการกินอาหารของคุณคือ
                    </h1>
                  </div>
                </Form>
              </Card>
              <Button
                color="var(--color-green)"
                onClick={() => updatePage(page + 1)}
                message={t("next")}
              />
            </div>
          </Layout>
          <Footer variant="light" />
        </Container>
      )
    // Section 2 Direction
    case 15:
      document.querySelector("body").style.backgroundColor =
        "var(--color-light-green)"

      return (
        <Container>
          <Header variant="light" />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-green)">
                <Form>
                  <div className="text-center">
                    <h1 style={{ color: "var(--color-green)" }}>HCU MAP</h1>
                    <p>อ่านข้อแนะนำ และข้อมูลเพิ่มเติมได้ที่บริเวณนี้</p>
                    <div className="position-relative">
                      <Image
                        src="/embify.png"
                        alt=""
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                </Form>
              </Card>
              <Button
                color="var(--color-green)"
                onClick={() => updatePage(page + 1)}
                message={t("success")}
              />
            </div>
          </Layout>
          <Footer variant="light" />
        </Container>
      )
    // 3อ. (Section 2 has been checked.)
    case 16:
      document.querySelector("body").style.backgroundColor =
        "var(--color-white)"

      return (
        <Container>
          <Header />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-dark-blue)">
                <Form>
                  <div className="text-center">
                    <h1 style={{ color: "var(--color-dark-blue)" }}>
                      HEALTH (สุขภาวะ)
                    </h1>
                    <p>องค์ประกอบของสุขภาพที่ดี ยึดหลัก 3อ. คือ</p>
                    <div className="position-relative">
                      <Image
                        src="/embify.png"
                        alt=""
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                </Form>
              </Card>
              <Button
                color="var(--color-dark-blue)"
                onClick={() => updatePage(page + 1)}
                message={t("next")}
              />
            </div>
          </Layout>
          <Footer />
        </Container>
      )
    // Section 3 Direction
    case 17:
      document.querySelector("body").style.backgroundColor =
        "var(--color-orange)"

      return (
        <Container>
          <Header variant="light" />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-blue)">
                <Form>
                  <div className="text-center">
                    <h1 style={{ color: "var(--color-blue)" }}>HCU MAP</h1>
                    <p>
                      ดูสัญลักษณ์ Check point บนพื้น
                      ตอนนี้คุณอยู่ที่สัญลักษณ์สีเขียวอ่อนหรือไม่
                    </p>
                    <div className="position-relative">
                      <Image
                        src="/embify.png"
                        alt=""
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                </Form>
              </Card>
              <Button
                color="var(--color-blue)"
                onClick={() => updatePage(page + 1)}
                message={t("success")}
              />
            </div>
          </Layout>
          <Footer variant="light" />
        </Container>
      )
    // Section 3 Questions
    case 18:
      document.querySelector("body").style.backgroundColor =
        "var(--color-orange)"

      return (
        <Container>
          <Header variant="light" />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-blue)">
                <Form>
                  <div className="text-center">
                    <h1 className="pb-4" style={{ color: "var(--color-blue)" }}>
                      วัดระดับความเครียดของคุณ ผ่านการตอบคำถาม 5 ข้อ
                    </h1>
                    <p>
                      ขอให้ตอบตรงกับความรู้สึกและตามพฤติกรรมจริงๆ ของท่านในรอบ 3
                      เดือนที่ผ่านมา
                    </p>
                  </div>
                </Form>
              </Card>
              <Button
                color="var(--color-blue)"
                onClick={() => updatePage(page + 1)}
                message={t("next")}
              />
            </div>
          </Layout>
          <Footer variant="light" />
        </Container>
      )
    // Section 3 Question 1
    case 19:
      document.querySelector("body").style.backgroundColor =
        "var(--color-orange)"

      return (
        <Container>
          <Header variant="light" />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-blue)">
                <Form>
                  <ChoiceList
                    color="var(--color-white)"
                    bgColor="var(--color-blue)"
                    list={1}
                    message="คุณมักจะเติมน้ำตาลเพิ่มลงในอาหาร"
                  />
                  <ChoiceSelectWrapper>
                    <ChoiceSelect
                      color="var(--color-blue)"
                      onClick={() => {
                        updateFormData({ section3_q1: "ไม่มีอาการ" })
                        updatePage(page + 1)
                      }}
                      message="ไม่มีอาการ"
                    />
                    <ChoiceSelect
                      color="var(--color-blue)"
                      onClick={() => {
                        updateFormData({
                          section3_q1: "มีอาการมากกว่า 1 ครั้งแต่ไม่บ่อย",
                        })
                        updatePage(page + 1)
                      }}
                      message="มีอาการมากกว่า 1 ครั้งแต่ไม่บ่อย"
                    />
                    <ChoiceSelect
                      color="var(--color-blue)"
                      onClick={() => {
                        updateFormData({
                          section3_q1: "มีอาการเกิดขึ้นเกือบทุกวัน",
                        })
                        updatePage(page + 1)
                      }}
                      message="มีอาการเกิดขึ้นเกือบทุกวัน"
                    />
                    <ChoiceSelect
                      color="var(--color-blue)"
                      onClick={() => {
                        updateFormData({ section3_q1: "มีอาการเกิดขึ้นทุกวัน" })
                        updatePage(page + 1)
                      }}
                      message="มีอาการเกิดขึ้นทุกวัน"
                    />
                  </ChoiceSelectWrapper>
                </Form>
              </Card>
            </div>
          </Layout>
          <Footer variant="light" />
        </Container>
      )
    // Section 3 Result
    case 20:
      document.querySelector("body").style.backgroundColor =
        "var(--color-orange)"

      return (
        <Container>
          <Header variant="light" />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-blue)">
                <Form>
                  <div className="text-center">
                    <h1 style={{ color: "var(--color-blue)" }}>
                      ระดับความเครียดของคุณคือ
                    </h1>
                    <div className="position-relative">
                      <Image
                        src="/embify.png"
                        alt=""
                        width={100}
                        height={100}
                      />
                      <h2 style={{ color: "var(--color-green)" }}>
                        ระดับที่ 1 หัวใจสีเขียว
                      </h2>
                      <p>ความเครียดระดับต่ำ</p>
                      <p>
                        คุณเป็นคนคิดบวก ไม่เครียด แม้มีความเครียด
                        แต่ยังพอรับมือได้ด้วยตัวเอง (ปกติ)
                      </p>
                    </div>
                  </div>
                </Form>
              </Card>
              <Button
                color="var(--color-blue)"
                onClick={() => updatePage(page + 1)}
                message={t("next")}
              />
            </div>
          </Layout>
          <Footer variant="light" />
        </Container>
      )
    // Section 3 Direction
    case 21:
      document.querySelector("body").style.backgroundColor =
        "var(--color-orange)"

      return (
        <Container>
          <Header variant="light" />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-blue)">
                <Form>
                  <div className="text-center">
                    <h1 style={{ color: "var(--color-blue)" }}>HCU MAP</h1>
                    <p>อ่านข้อแนะนำ และข้อมูลเพิ่มเติมได้ที่บริเวณนี้</p>
                    <div className="position-relative">
                      <Image
                        src="/embify.png"
                        alt=""
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                </Form>
              </Card>
              <Button
                color="var(--color-blue)"
                onClick={() => updatePage(page + 1)}
                message={t("success")}
              />
            </div>
          </Layout>
          <Footer variant="light" />
        </Container>
      )
    // 3อ. (Section 3 has been checked.)
    case 22:
      document.querySelector("body").style.backgroundColor =
        "var(--color-white)"

      return (
        <Container>
          <Header />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-dark-blue)">
                <Form>
                  <div className="text-center">
                    <h1 style={{ color: "var(--color-dark-blue)" }}>
                      HEALTH (สุขภาวะ)
                    </h1>
                    <p>องค์ประกอบของสุขภาพที่ดี ยึดหลัก 3อ. คือ</p>
                    <div className="position-relative">
                      <Image
                        src="/embify.png"
                        alt=""
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                </Form>
              </Card>
              <Button
                color="var(--color-dark-blue)"
                onClick={() => updatePage(page + 1)}
                message={t("summary")}
              />
            </div>
          </Layout>
          <Footer />
        </Container>
      )
    default:
      useEffect(() => {
        document.querySelector("body").style.backgroundColor =
          "var(--color-white)"
      })

      return (
        <Container>
          <Header />
          <Layout>
            <Card color="var(--color-pink)">
              <div className="pb-3">
                <button
                  className="w-100"
                  color="var(--color-pink)"
                  onClick={() => {
                    router.push("/", "/", { locale: "th" })
                    updatePage(1)
                  }}
                >
                  ภาษาไทย
                </button>
              </div>
              <div>
                <button
                  className="w-100"
                  color="var(--color-pink)"
                  onClick={() => {
                    router.push("/", "/", { locale: "en" })
                    updatePage(1)
                  }}
                >
                  English
                </button>
              </div>
            </Card>
          </Layout>
          <Footer />
        </Container>
      )
  }
}

export default App
