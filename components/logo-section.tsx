export function LogosSection() {
  return (
    <>
      <section className="py-12 border-y bg-muted/30">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-medium text-muted-foreground mb-8">
            TRUSTED BY DEVELOPERS FROM
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-70">
            {/* This would normally have actual company logos */}
            {[
              "Company 1",
              "Company 2",
              "Company 3",
              "Company 4",
              "Company 5",
            ].map((company, i) => (
              <div key={i} className="text-lg font-bold text-muted-foreground">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
