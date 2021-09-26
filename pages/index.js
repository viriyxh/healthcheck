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

const App = ({ page, updatePage, formData, updateFormData }) => {
  const router = useRouter()

  let { t } = useTranslation("common")

  console.log(formData)

  switch (page) {
    case 1:
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
    case 2:
      return (
        <Container>
          <Header />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-blue)">
                <Form>
                  <div className="text-center">
                    <h1 style={{ color: "var(--color-blue)" }}>
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
                color="var(--color-blue)"
                onClick={() => updatePage(page + 1)}
                message={t("next")}
              />
            </div>
          </Layout>
          <Footer />
        </Container>
      )
    case 3:
      return (
        <Container>
          <Header />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-blue)">
                <Form>
                  <div className="text-center">
                    <h1 style={{ color: "var(--color-blue)" }}>HCU MAP</h1>
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
                color="var(--color-blue)"
                onClick={() => updatePage(page + 1)}
                message={t("success")}
              />
            </div>
          </Layout>
          <Footer />
        </Container>
      )
    case 4:
      return (
        <Container>
          <Header />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-blue)">
                <Form>
                  <div className="text-center">
                    <h1 style={{ color: "var(--color-blue)" }}>
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
                color="var(--color-blue)"
                onClick={() => updatePage(page + 1)}
                message={t("next")}
              />
            </div>
          </Layout>
          <Footer />
        </Container>
      )
    case 5:
      return (
        <div style={{ backgroundColor: "var(--color-green)" }}>
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
                        <br />
                        ตอนนี้คุณอยู่ที่สัญลักษณ์สีเขียวเข้มหรือไม่?
                      </p>
                      <div class="position-relative">
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
        </div>
      )
    case 6:
      return (
        <div style={{ backgroundColor: "var(--color-green)" }}>
          <Container>
            <Header variant="light" />
            <Layout>
              <div className="cardWrapper">
                <Card color="var(--color-blue)">
                  <Form>
                    <div className="text-center">
                      <h1 style={{ color: "var(--color-green)" }}>
                        ทดสอบร่างกายผ่านเครื่องเล่น 5-Minute Body Test
                      </h1>
                      <div class="position-relative">
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
                  message={t("next")}
                />
              </div>
            </Layout>
            <Footer variant="light" />
          </Container>
        </div>
      )
    case 7:
      return (
        <div style={{ backgroundColor: "var(--color-green)" }}>
          <Container>
            <Header variant="light" />
            <Layout>
              <div className="cardWrapper">
                <Card color="var(--color-blue)">
                  <Form>
                    <div>
                      <h1
                        className="text-center"
                        style={{ color: "var(--color-green)" }}
                      >
                        ข้อมูลที่ได้
                      </h1>
                      <div>
                        <Input
                          label="สมรรถภาพหัวใจและหลอดเลือด"
                          type="number"
                          id="opt1"
                          color="var(--color-green)"
                          onChangeHandler={(value) => {
                            updateFormData({ section1_opt1: value })
                          }}
                        />
                        <Input
                          label="สมรรถภาพกล้ามเนื้อ"
                          type="number"
                          id="opt2"
                          color="var(--color-green)"
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
              </div>
            </Layout>
            <Footer variant="light" />
          </Container>
        </div>
      )
    default:
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
